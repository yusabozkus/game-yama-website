// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7RmB1K4ShRCTe51LgQqy1jLzSL2C1Yn8",
  authDomain: "yamahub.firebaseapp.com",
  databaseURL: "https://yamahub-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "yamahub",
  storageBucket: "yamahub.appspot.com",
  messagingSenderId: "845635579339",
  appId: "1:845635579339:web:2c5c17c56e6fe92809da4e",
  measurementId: "G-4HWS0STLGG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()
const databaseName = database.ref('messages');

function save() {
  var txtTitle = document.getElementById('txtTitle').value
  var txtName = document.getElementById('txtName').value
  var txtMail = document.getElementById('txtMail').value
  var txtDescription = document.getElementById('txtDescription').value
  var imgLinkIn = document.getElementById('imgLinkIn').value

  database.ref('messages/' + txtTitle).set({
    txtTitle: txtTitle,
    txtName: txtName,
    txtMail: txtMail,
    txtDescription: txtDescription,
    imgLinkIn: imgLinkIn,
  })

  alert('Saved')
}
function load() {
  const messageData = firebase.database().ref('messages');

  messageData.on('child_added', (snapshot) => {
    const data = snapshot.val();

    // Yeni veriyi sayfada kart olarak ekleyin
    const cartMessage = document.createElement('div');
    cartMessage.classList.add('message-card'); // CSS'e uygun bir sınıf ekleyebilirsiniz

    // Kart içeriğini oluşturun
    cartMessage.innerHTML = `
            <div class="card-content">
                                <div class="message-title">
                                    <h1>${data.txtTitle}</h1>
                                    <p class="description-message" >${data.txtDescription}</p>
                                    <div class="bottom-card-mes flexitem">
                                        <a href="${data.imgLinkIn}" target="_blank"><button>EKRAN GÖRÜNTÜSÜ</button></a>
                                        <button onclick="deleteMessage('${data.txtTitle}')" >OKUDUM</button>
                                        <div class="small-content">
                                            <p id="pNameMes"><i class="fa-solid fa-user-secret"></i> ${data.txtName}</p>
                                            <p id="pMailMes"><i class="fa-solid fa-mailbox"></i> ${data.txtMail}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;


    // Kartı sayfaya ekleyin
    const divMessageCartContent = document.getElementById('messageContainer'); // Kartların ekleneceği div
    divMessageCartContent.appendChild(cartMessage);

  });
}
function get() {
  var txtTitle = document.getElementById('txtTitle').value

  var user_ref = database.ref('messages/' + txtTitle)
  user_ref.on('value', function (snapshot) {
    var data = snapshot.val()

    alert(data.txtName)

  })

}

function deleteMessage(cardTitle) {
  // Firebase'den kartı silme işlemi
  firebase.database().ref('messages/' + cardTitle).remove()
    .then(() => {
    })
    .catch((error) => {
      console.error('Kart silinirken bir hata oluştu:', error);
    });

  const kart = document.querySelector('.message-card') // Butonun ebeveynine (kart) erişin
  const h1 = kart.querySelector('h1'); // Kart içindeki h1 başlığını seçin

  if(h1.textContent === cardTitle){
    kart.classList.add('deleted')
    
    setTimeout(function() {
      // 2 saniye sonra bu kod çalışacak
      kart.remove()
    }, 400); //
  }
  
}

function deleteMessage3() {
  databaseName.on('child_removed', (snapshot) => {
    // Silinen verinin kimliğini alın
    const kartId = snapshot.key;

    console.log('asdasd');
    console.log(kartId);

  });
}

// deleteMessage3()