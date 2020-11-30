//import example from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
const characters = data.results;
const episodesList = [
  {
    "name": "Pilot",
    "episode": "S01E01"
  },
  {
    "name": "Lawnmower Dog",
    "episode": "S01E02",
  },
  {
    "name": "Anatomy Park",
    "episode": "S01E03",
  },
  {
    "name": "M. Night Shaym-Aliens",
    "episode": "S01E04",
  },
  {
    "name": "Meeseeks and Destroy",
    "episode": "S01E05",
  },
  {
    "name": "Rick Potion #9",
    "episode": "S01E06",
  },
  {
    "name": "Raising Gazorpazorp",
    "episode": "S01E07",
  },
  {
    "name": "Rixty Minutes",
    "episode": "S01E08",
  },
  {
    "name": "Something Ricked This Way Comes",
    "episode": "S01E09",
  },
  {
    "name": "Close Rick-counters of the Rick Kind",
    "episode": "S01E10",
  },
  {
    "name": "Ricksy Business",
    "episode": "S01E11",
  },
  {
    "name": "A Rickle in Time",
    "episode": "S02E01"
  },
  {
    "name": "Mortynight Run",
    "episode": "S02E02",
  },
  {
    "name": "Auto Erotic Assimilation",
    "episode": "S02E03",
  },
  {
    "name": "Total Rickall",
    "episode": "S02E04",
  },
  {
    "name": "Get Schwiftyy",
    "episode": "S02E05",
  },
  {
    "name": "The Ricks Must Be Crazy",
    "episode": "S02E06",
  },
  {
    "name": "Big Trouble in Little Sanchez",
    "episode": "S02E07",
  },
  {
    "name": "Interdimensional Cable 2: Tempting Fatea",
    "episode": "S02E08",
  },
  {
    "name": "Look Who's Purging Now",
    "episode": "S02E09",
  },
  {
    "name": "The Wedding Squanchers",
    "episode": "S02E10",
  },
  {
    "name": "The Rickshank Rickdemptio",
    "episode": "S03E01"
  },
  {
    "name": "Rickmancing the Stone",
    "episode": "S03E02",
  },
  {
    "name": "Pickle Rick",
    "episode": "S03E03",
  },
  {
    "name": "Vindicators 3: The Return of Worldender",
    "episode": "S03E04",
  },
  {
    "name": "The Whirly Dirly Conspiracy",
    "episode": "S03E05",
  },
  {
    "name": "Rest and Ricklaxation",
    "episode": "S03E06",
  },
  {
    "name": "The Ricklantis Mixup",
    "episode": "S03E07",
  },
  {
    "name": "Morty's Mind Blowers",
    "episode": "S03E08",
  },
  {
    "name": "The ABC's of Beth",
    "episode": "S03E09",
  },
  {
    "name": "The Rickchurian Mortydate",
    "episode": "S03E10",
  },
];
function printData(data) {
  let printDataBase = "";
  for (let item of data) {
    let firstEpisode = (item.episode[0]).substr(40, 39);
    const episodeIndex = firstEpisode - 1;
    printDataBase += `
      <div class="testing">
        <div class="card">
          <div class="cardFront">  
            <div class="image" style="background-image: url(${item.image})"></div>
            <div class="text">
                <h3 class="name">${item.name}</h3>
                <h4 class="subtitle"> First time seen: </h4>
                  <p class="data" id="episode">${episodesList[episodeIndex].name}</p>
                  <p class="data" id="episode">${episodesList[episodeIndex].episode}</p>
            </div>
          </div>
          <div class="cardBack">
            <div class="textBack">
              <h3 class="name">${item.name}</h3>
              <br><h4 class="subtitle"> Species: </h4>
              <p class="data" id="species">${item.species}</p></br>
              <br><h4 class="subtitle"> Gender: </h4>
              <p class="data" id="gender">${item.gender}</p></br>
              <br><h4 class="subtitle"> Origin: </h4>
              <p class="data" id="origin">${item.origin.name}</p></br>
              <br><h4 class="subtitle"> Location: </h4>
              <p class="data" id="location">${item.location.name}</p></br>
              <br><h4 class="subtitle"> Status: </h4>
              <p class="data" id="status">${item.status}</p></br>
            </div>  
          </div>        
        </div>
      </div>`
  }
  document.getElementById("cardArea").innerHTML = printDataBase;
}
printData(characters);
document.getElementById("order").addEventListener("change", alphabeticOrder);
function alphabeticOrder() {
  const selectOrder = document.getElementById("order").value;
  /*for (let item of characters) {
    let charactersRelevance = [];
    charactersRelevance = (item.episode.length);
    };*/
  if (selectOrder === "az") {
    characters.sort(function (a, b) {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
      return 0;
    })
  } else {
    characters.sort(function (a, b) {
      if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
      if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
      return 0;
    })
  };
  printData(characters);
};
document.getElementById("status").addEventListener("change", statusFilter);
function statusFilter() {
  const getStatus = document.getElementById("status").value;
  const filterStatus = characters.filter((item) => item.status === getStatus);
  statisticData(filterStatus, getStatus);
  printData(filterStatus);
};
document.getElementById("species").addEventListener("change", speciesFilter);
function speciesFilter() {
  const getSpecies = document.getElementById("species").value;
  const filterSpecies = characters.filter((item) => item.species === getSpecies);
  statisticData(filterSpecies, getSpecies);
  printData(filterSpecies);
};
document.getElementById("gender").addEventListener("change", genderFilter);
function genderFilter() {
  const getGender = document.getElementById("gender").value;
  const filterGender = characters.filter((item) => item.gender === getGender);
  statisticData(filterGender, getGender);
  printData(filterGender);
};
document.getElementById("enter").addEventListener("click", searchLocation);
function searchLocation(){
  const getLocation = document.getElementById("search").value.toUpperCase();
  const filterLocation = characters.filter((item) => ((item.location.name).toUpperCase()).includes(`${getLocation}`));
  console.log(filterLocation);
  printData(filterLocation);
};
function statisticData(data, condition) {
  document.getElementById("results").innerHTML = "";
  const percentage = Math.round((data.length * 100) / characters.length);
  const results = document.createElement("p");
  const content = document.createTextNode(`${percentage}% of the characters are ${condition.toLowerCase()}`);
  results.appendChild(content);
  document.getElementById("results").appendChild(results);
};

// em, rem 

// aparecer o nome enquando digita localização (verificar quanto de origem) .oninput
// filtro temporada ou episódio
// ordenar por relevância (maior número de aparição)

/*
Acummular filtro
Se atende aos valores solicitados
Gender && status && species

function filter () {
  if (genderFilter && statusFilter && speciesFilter)
  os três valores do input tem que constar na array
}

o map() aplica uma função à todos os elementos de uma array:
aplicar a função de mudar episódios

criar uma função para verificar se o objeto personagem atende aos três filtros
usar o map para o array results
*/