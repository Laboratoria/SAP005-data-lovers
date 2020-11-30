import {
  calculusPokemon,
  namePokemon,
  typePokemon, orderPokemon
} from './data.js';
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
        <h4 class="card-num">Número:${card.num}</h4>
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
  event.preventDefault();

  const searchName = document.getElementById("textInput").value;
  const filterName = namePokemon(dataPokemon, searchName);
  pokebola(filterName);
}

const orderFilter = document.getElementById("orderInput");
orderFilter.addEventListener("click", formFilterOrder);

function formFilterOrder(event) {
  event.preventDefault();

  const order = document.getElementById("orderInput").value;
  const orderFilter = orderPokemon(dataPokemon, order);
  pokebola(orderFilter)
}

const inputFilterType = document.getElementById("typeInput");
inputFilterType.addEventListener("click", formFilterType);

function formFilterType(event) {
  event.preventDefault();

  const filterType = document.getElementById("typeInput").value;
  if (filterType == "todos") {
    document.getElementById("calculus").innerHTML = `Lista com todos os tipos de Pokémon`
    pokebola(dataPokemon);
  } else {
    const filterTypePokemon = typePokemon(dataPokemon, filterType);
    const calculusTypes = calculusPokemon(dataPokemon, filterTypePokemon);
    document.getElementById("calculus").innerHTML = `${calculusTypes.toFixed(1)}% dos Pokémon são do tipo ${filterType}.`
    pokebola(filterTypePokemon);
  }
}
