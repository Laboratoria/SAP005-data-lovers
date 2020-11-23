//import example from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
const characters = data.results;

// só tá retornando Alive no console - criar o input, eventos e organizar a função (if/else)
function getStatus (morty) {
  if (morty.status === "Alive") {
    return "Alive";
  }else{
  if (characters.status === "Dead")
    return "Dead";
  }  
  //if (characters.status === "Unknow") return "Unknow";
};
getStatus(characters);
let rick = [];
rick = characters.filter(getStatus);
console.log (rick);

// lista de personagens nos cards
function printData(file) {
    for (let item of file) {
    document.body.querySelector("#cardArea").innerHTML += `
      <div class="testing">
        <div class="card">
          <div class="cardFront">  
            <div class="image" style="background-image: url(${item.image})"></div> 
            <div class="text">
                <h1 class="name">${item.name}</h1>
                <h3 class="subtitle"> First time seen: </h3>
                <p class="data" id="episode">${item.episode[0]}</p>
            </div>
          </div>
          <div class="cardBack">
            <div class="textBack">
              <h4 class="name">${item.name}</h4>
              <br><h5 class="subtitle"> Species: </h5>
              <p class="data" id="species">${item.species}</p></br>
              <br><h6 class="subtitle"> Gender: </h6>
              <p class="data" id="gender">${item.gender}</p></br>
              <br><h7 class="subtitle"> Origin: </h7>
              <p class="data" id="origin">${item.origin.name}</p></br>
              <br><h8 class="subtitle"> Location: </h8>
              <p class="data" id="location">${item.location.name}</p></br>
              <br><h9 class="subtitle"> Status: </h9>
              <p class="data" id="status">${item.status}</p></br>
            </div>  
          </div>        
        </div>
      </div> `
    }
}
printData(characters);
//console.log(example, data);