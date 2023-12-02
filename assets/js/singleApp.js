let discordNav = document.querySelector('#site > div.fixed-wrapper > div > header > div.header-inside > div.header-menu.social > ul > li:nth-child(1) > a')
let contactUsNav = document.querySelector('#site > div.fixed-wrapper > div > header > div.header-inside > div.header-menu.etkılesım > ul > li:nth-child(2) > a')
let newsNav = document.querySelector('#site > div.fixed-wrapper > div > header > div.header-inside > div.header-menu.menu > ul > li:nth-child(4) > a')
let instaNav = document.querySelector('#site > div.fixed-wrapper > div > header > div.header-inside > div.header-menu.social > ul > li:nth-child(2) > a')

newsNav.href = '../news.html'
instaNav.href = 'https://www.instagram.com/yamahub.online/'
contactUsNav.href = '../contact-us.html'

discordNav.href = 'https://discord.gg/MMu4R5SHha'
discordNav.target = '_blank'
instaNav.target = '_blank'

window.addEventListener('load', (e) => {
  const APIKey = '57158c928a0e0db2b371db9119489420'

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=turkey&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

      const temperature = document.querySelector('.card-weather .card-right p')
      const image = document.querySelector('.card-weather .card-left img')

      switch (json.weather[0].main) {
        case 'Clear':
          image.src = '../assets/img/home/weather/clear.png';
          break;

        case 'Rain':
          image.src = '../assets/img/home/weather/rain.png';
          break;

        case 'Snow':
          image.src = '../assets/img/home/weather/snow.png';
          break;

        case 'Clouds':
          image.src = '../assets/img/home/weather/cloud.png';
          break;
        case 'Haze':
          image.src = '../assets/img/home/weather/mist.png';
          break;

        default:
          image.src = '';
      }
      temperature.innerHTML = `${parseInt(json.main.temp)} °C`
    });
})


let json_games3 = "../assets/js/games.json";

fetch(json_games3).then(Response => Response.json())
  .then((data) => {

    data.forEach((ele, i) => {
      let { gameName, gameBigBanner, gamesite, gameCompany } = ele;
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
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
          a[index].style.display = "flex";
          searchContent.style.visibility = "visible"
          searchContent.style.opacity = 1
        } else {
          a[index].style.display = "none";
        }
        if (searchInput.value == 0) {
          searchContent.style.visibility = "hidden"
          searchContent.style.opacity = 0
        }
      }
    });

    data.forEach((ele, i) => {

      let games_array = data.filter(ele => {
        return ele.gameName === "Red Dead Redemption 2"
      });
      
    })
  });

let singlePageHakkimda = document.querySelector('#site > div.fixed-wrapper > div > header > div.header-inside > div.header-menu.etkılesım > ul > li:nth-child(1)')
let aboutA = document.querySelector('#site > div.fixed-wrapper > div > header > div.header-inside > div.header-menu.etkılesım > ul > li:nth-child(1) > a')

aboutA.href = '#'

singlePageHakkimda.addEventListener('click', (e) =>  {
  window.location.href = '../about-us.html'
})


