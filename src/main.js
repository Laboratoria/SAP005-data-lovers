import data from './data/pokemon/pokemon.js';

const dataPokemon = data.pokemon

const hamburguer = document.getElementById("menu-hamburguer");
hamburguer.addEventListener("click", () => {
  document.getElementById("root").classList.toggle("show-menu");
})

const inputfilter = document.getElementById("filtro");
inputfilter.addEventListener("click", formFilter);

function formFilter(event){
  event.preventDefault()

  const searchName = document.getElementById("textInput").value;
  const namePokemon = searchName.toLowerCase();

  const typePokemon = document.getElementById("typeInput").value;

  const orderPokemon =document.getElementById("orderInput").value;

  console.log(namePokemon)
  console.log(typePokemon)
  console.log(orderPokemon)
}

function pokebola() {
  let auxPoke= "";
  for (let card of dataPokemon) {
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

/*filtros estão aqui... funcionam mas precisa fazer os filtros pegar o dados q a  formFilter imprime*/
/*acho que precia criar uma função pra cada filtro, to pensando não sei como fazer ainda kkkk*/

const filterTypes= dataPokemon.filter(item => item.type.includes("water"));

const filterAlphabetAZ= dataPokemon.sort(function (a, b) {
  return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
});


const filterAlphabetZA= dataPokemon.sort(function (a, b) {
  return (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0);
});

//adicionar um if para função de ordenção apenas ser ignorada pq assim se mantem a oredem numerica dos pokemons 

const filterName = (query) => {
  return dataPokemon.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
};


console.log(filterName('sq'))
console.log(filterTypes);




