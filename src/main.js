import {sortByAlphabeticOrder, searchByLocation, filterByGender, filterByStatus, filterBySpecies} from './data.js';
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
function createCards(data) {
  let printCards = "";
  for (let item of data) {
    let firstEpisode = (item.episode[0]).substr(40, 39);
    const episodeIndex = firstEpisode - 1;
    printCards += `
      <div class="flip">
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
  document.getElementById("cardArea").innerHTML = printCards;
};
createCards(characters);
document.getElementById("order").addEventListener("change", getSort);
document.getElementById("enter").addEventListener("click", getSearch);
document.getElementById("gender").addEventListener("change", getGender);
document.getElementById("status").addEventListener("change", getStatus);
document.getElementById("species").addEventListener("change", getSpecies);
function getSort() {
  const orderOption = document.getElementById("order").value;
  const resultOrder = sortByAlphabeticOrder(characters, orderOption);
  createCards(resultOrder);
};
function getSearch() {
  const searchOption = document.getElementById("search").value.toUpperCase();
  const resultSearch = searchByLocation(characters, searchOption);
  createCards(resultSearch);
};
function getGender() {
  const gender = document.getElementById("gender").value;
  const resultFilter = filterByGender(characters, gender);
  createCards (resultFilter);
};
function getStatus() {
  const status = document.getElementById("status").value;
  filterByStatus(status);
};
function getSpecies() {
  const species = document.getElementById("species").value;
  filterBySpecies(species);
};
export const printStatistic = (result, filter) => {
  document.getElementById("results").innerHTML = "";
  const results = document.createElement("p");
  const content = document.createTextNode(`${result}% of the characters are ${filter.toLowerCase()}`);
  results.appendChild(content);
  document.getElementById("results").appendChild(results);
};