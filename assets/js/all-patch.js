let json_games_allpatch = "assets/js/games.json";

fetch(json_games_allpatch).then(Response => Response.json())
  .then((data) => {
    data.forEach((ele, i) => {
      let { gameName, gameBigBanner, gamesite } = ele;
      let card = document.createElement('a');
      card.href = gamesite
      card.innerHTML = `
      <div class="patch-card">
        <div class="banner">
            <img src="${gameBigBanner}" alt="">
        </div>
        <div class="content-card">
            <h1>${gameName}</h1>
        </div>
      </div> `

      allPatchsContent.appendChild(card)
    })
  });