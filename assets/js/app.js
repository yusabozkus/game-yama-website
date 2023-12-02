let themeBtn = document.getElementById('checkbox')
let mobileCheckbox = document.getElementById('mobileCheckbox')
let siteMain = document.getElementById('site')
let isOnlineSvg = document.getElementById('onlineSvg')
let isOfflineSvg = document.getElementById('offlineSvg')
let feedbackButton = document.getElementById('feedbackButton')
let feedbackContainer = document.querySelector('.feedback-container')
let feedBackCancelButton = document.getElementById('feedBackCancelButton')
let openMobileMenu = document.getElementById('openMobileMenu')
let mobileFixedMenu = document.getElementById('mobileFixedMenu')
let searchContent = document.getElementById('searchContent')
let searchInput = document.getElementById('searchInput')
let bodyMain = window.document.body

if (window.navigator.onLine == true) {
  isOnlineSvg.style.display = 'block'
} else {
  isOfflineSvg.style.display = 'block'
  isOfflineSvg.style.scrollBehavior
}

window.addEventListener('load', (e) => {
  if (localStorage.getItem('siteTheme') == 'true') {
    bodyMain.classList.add('dark-theme')
    themeBtn.checked = true
    mobileCheckbox.checked = true
  } else if (localStorage.getItem('siteTheme') == 'false') {
    bodyMain.classList.remove('dark-theme')
    themeBtn.checked = false
    mobileCheckbox.checked = false
  }
})

openMobileMenu.addEventListener('click', (e) => {
  bodyMain.classList.toggle('show-menu')

})
if (bodyMain.classList.contains('show-menu')) {
  bodyMain.style.overflowY = 'hidden'
} else {
  bodyMain.style.overflowY = 'visible'
}
themeBtn.addEventListener("change", (e) => {
  if (themeBtn.checked == true) {
    localStorage.setItem('siteTheme', true)
    bodyMain.classList.add('dark-theme')
  } else if (themeBtn.checked == false) {
    localStorage.setItem('siteTheme', false)
    bodyMain.classList.remove('dark-theme')
  }
})

mobileCheckbox.addEventListener("change", (e) => {
  if (mobileCheckbox.checked == true) {
    localStorage.setItem('siteTheme', true)
    bodyMain.classList.add('dark-theme')
  } else if (mobileCheckbox.checked == false) {
    localStorage.setItem('siteTheme', false)
    bodyMain.classList.remove('dark-theme')
  }
})

feedbackButton.addEventListener('click', (e) => {
  bodyMain.classList.add('show-feedback')
  window.scrollTo(0, 0);

  bodyMain.style.overflowY = 'hidden'
})

feedBackCancelButton.addEventListener('click', (e) => {
  bodyMain.classList.remove('show-feedback')
  bodyMain.style.overflowY = 'visible'
}
)

// weather

window.addEventListener('load', (e) => {
  const APIKey = '57158c928a0e0db2b371db9119489420'

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=turkey&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

      const temperature = document.querySelector('.card-weather .card-right p')
      const image = document.querySelector('.card-weather .card-left img')

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = 'assets/img/home/weather/clear.png';
          break;

        case 'Rain':
          image.src = 'assets/img/home/weather/rain.png';
          break;

        case 'Snow':
          image.src = 'assets/img/home/weather/snow.png';
          break;

        case 'Clouds':
          image.src = 'assets/img/home/weather/cloud.png';
          break;
        case 'Haze':
          image.src = 'assets/img/home/weather/mist.png';
          break;

        default:
          image.src = '';
      }
      temperature.innerHTML = `${parseInt(json.main.temp)} °C`
    });
})

const swiper = new Swiper('.swiper', {
  // Optional parameters

  slidesPerView: 'auto',

  autoplay: {
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    delay: 1000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperRated = new Swiper('.swiper-rated', {
  // Optional parameters
  slidesPerView: 'auto'

});

const swiperPatch = new Swiper('.swiper-patch', {
  // Optional parameters

  slidesPerView: 'auto',

  autoplay: {
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    delay: 1000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

const mainSlider = new Swiper('.main-slider', {
  // Optional parameters
  slidesPerView: 'auto',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});


//games json
const json_games_search = "assets/js/games.json";

  fetch(json_games_search).then(Response => Response.json())
  .then((data) => {

    data.forEach((ele, i) => {
      let { gameName, gameBigBanner, gamesite , gameCompany} = ele;
      let card = document.createElement('a');
      card.classList.add('search-card');
      card.href = gamesite;
      card.innerHTML = `<img src="${gameBigBanner}" alt="">
      <div class="s-card-content">
          <h3>${gameName}</h3>
          <p>${gameCompany}</p>
      </div>`

      searchContent.appendChild(card)
    })

    searchInput.addEventListener('keyup', () => {
      let filter = searchInput.value.toUpperCase();
      let a = searchContent.getElementsByTagName('a');

      for (let index = 0; index < a.length; index++) {
        let b = a[index].getElementsByClassName('s-card-content')[0];
        // console.log(a.textContent);

        let TextValue = b.textContent || b.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1 ){
          a[index].style.display = "flex";
          searchContent.style.visibility = "visible"   
          searchContent.style.opacity = 1   
        }else{
           a[index].style.display = "none";
        }
        if (searchInput.value == 0){
          searchContent.style.visibility = "hidden"   
          searchContent.style.opacity = 0   
        }
      }
    });
  });
// function scrollHeader() {
//   const rightContent = document.getElementById('rightContent')
//   // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag

//   if (this.scrollY >= 50) {
//     rightContent.style.top = '20px'
//   } else {
//     rightContent.style.top = '110px'
//   }
// }
// window.addEventListener('scroll', scrollHeader)

