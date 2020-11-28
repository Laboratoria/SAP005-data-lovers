import data from './data/pokemon/pokemon.js';

const dataPokemon = data.pokemon;

const hamburguer = document.getElementById("menu-hamburguer");
hamburguer.addEventListener("click", () => {
  document.getElementById("root").classList.toggle("show-menu");
})

function pokebola(list) {
  let auxPoke = "";
  for (let card of list) {
    auxPoke += `
    <li class="card-poke">
        <img class="card-image" src="${card.img}" alt="${card.name}"/>
        <h2 class="card-name">${card.name}</h2>
        <h4 class="card-generet">Geração:${card.generation.name}</h4>
        <h4 class="card-type">Tipo:${card.type.toString().replace(",","|")}</h4>
    </li>`
  }
  document.getElementById("pokedex").innerHTML = auxPoke
}
pokebola(dataPokemon);

const sendFilterSearch = document.getElementById("searchInput");
sendFilterSearch.addEventListener("click", formFilterName);

function formFilterName(event) {
  event.preventDefault()

  const searchName = document.getElementById("textInput").value;
  const namePokemon = searchName.toLowerCase();
  const filterName = dataPokemon.filter(item => item.name.includes(namePokemon));
  pokebola(filterName)

};
const inputFilterType = document.getElementById("typeInput");
inputFilterType.addEventListener("click", formFilterType);

function formFilterType(event) {
  event.preventDefault()

  const typePokemon = document.getElementById("typeInput").value;
  if(typePokemon == "todos"){
    pokebola(dataPokemon)
  }else {
  const filterTypes = dataPokemon.filter(item => item.type.includes(typePokemon));
  pokebola(filterTypes)}
 
};

const orderFilter = document.getElementById("orderInput");
orderFilter.addEventListener("click", formFilterOrder);

function formFilterOrder(event) {
  event.preventDefault()

  const orderPokemon = document.getElementById("orderInput").value;

  //const filterAlphabetAZ = dataPokemon.sort(function (a, b) {
   // if (orderPokemon == "A-Z") {
     // (a.name > b.name) ? 1: ((b.name > a.name) ? -1 : 0);
     // pokebola(filterAlphabetAZ)
   // } else if (orderPokemon == "Z-A") {
    //  (a.name < b.name) ? 1: ((b.name < a.name) ? -1 : 0);
   //   pokebola(filterAlphabetAZ)
   // }
    
 // });
  
};