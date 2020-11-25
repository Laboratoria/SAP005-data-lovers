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
function printData() {
  document.body.querySelector("#cardArea").innerHTML = "";
  for (let item of characters) {
    let beth = (item.episode[0]).substr(40, 39);
    const episodeIndex = beth - 1;
    document.body.querySelector("#cardArea").innerHTML += `
      <div class="testing">
        <div class="card">
          <div class="cardFront">  
            <div class="image" style="background-image: url(${item.image})"></div>
            <div class="text">
                <h3 class="name">${item.name}</h3>
                <h4 class="subtitle"> First time seen: </h4>
                  <p class="data" id="episode">${episodesList[episodeIndex].name}</p>
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
}
printData();
document.querySelector('#order').addEventListener('change', alphabeticOrder);
//Trocar A-Z e Z-A por relevância na série (número de episódios em que apareceu)
function alphabeticOrder() {
  const selectOrder = document.querySelector('#order').value;
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
document.querySelector('#status').addEventListener('change', statusFilter);
function statusFilter() {
  document.querySelector('.results').innerHTML = "";
  const getStatus = document.querySelector('#status').value;
  const filteredStatus = characters.filter((item) => item.status === getStatus);
  printData(filteredStatus);
  const percentage = Math.round((filteredStatus.length * 100) / characters.length);
  const category = getStatus.toLowerCase();
  const results = document.createElement("p");
  const content = document.createTextNode(`${percentage}% of the characters are ${category}`);
  results.appendChild(content);
  document.querySelector('.results').appendChild(results);
};
document.querySelector('#species').addEventListener('change', speciesFilter);
function speciesFilter() {
  document.querySelector('.results').innerHTML = "";
  const getSpecies = document.querySelector('#species').value;
  const filteredSpecies = characters.filter((item) => item.species === getSpecies);
  printData(filteredSpecies);
  const percentage = Math.round((filteredSpecies.length * 100) / characters.length);
  const category = getSpecies.toLowerCase();
  const results = document.createElement("p");
  const content = document.createTextNode(`${percentage}% of the characters are ${category}`);
  results.appendChild(content);
  document.querySelector('.results').appendChild(results);
};
document.querySelector('#gender').addEventListener('change', genderFilter);
function genderFilter() {
  document.querySelector('.results').innerHTML = "";
  const getGender = document.querySelector('#gender').value;
  const filteredGender = characters.filter((item) => item.gender === getGender);
  printData(filteredGender);
  const percentage = Math.round((filteredGender.length * 100) / characters.length);
  const category = getGender.toLowerCase();
  const results = document.createElement("p");
  const content = document.createTextNode(`${percentage}% of the characters are ${category}`);
  results.appendChild(content);
  document.querySelector('.results').appendChild(results);
};
