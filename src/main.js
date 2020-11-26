import data from './data/pokemon/pokemon.js';

const hamburguer = document.getElementById("menu-hamburguer");
hamburguer.addEventListener("click", () => {
  document.getElementById("root").classList.toggle("show-menu");
})

function pokebola() {
  let auxPoke= "";
  for (let card of data.pokemon) {
    auxPoke += `
    <li class="card-poke">
        <img class="card-image" src="${card.img}" alt="${card.name}"/>
        <h2 class="card-name">Nome:${card.name}</h2>
        <h3 class="card-generet">Geração:${card.generation.name}</h3>
        <h4 class="card-type">Tipo:${card.type.toString().replace(","," ")}</h4>
    </li>`
  }
  document.getElementById("pokedex").innerHTML = auxPoke
}
pokebola(data.pokemon);
