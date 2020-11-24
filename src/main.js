import { selectType, calcType } from './data.js';
import data from './data/pokemon/pokemon.js';

const listaPokemons = data.pokemon;

function pokemons(lista) {
    for (let item of lista) {
        document.body.querySelector(".pokemons").innerHTML += `
                <div class="card">
                    <h2 class="pokemon-name">${item.name.toUpperCase()}</h2>
                    <h2 class="pokemon-num">${item.num}</h2>
                    <img src="${item.img}" alt="${item.name}" class="pokemon-img">
                    <p class="pokemon-region">Região: ${item.generation.name}.</p>
                    <p class="pokemon-type">Tipo:<br>${item.type.toString().replace(",",", ")}.</p>
                </div>
        `
    }
};

pokemons(listaPokemons);

document.getElementById("filterType").onchange = () => {
    const cards = document.getElementById("pokemons");
    cards.innerHTML = "";
    const filtroType = document.getElementById("filterType").value;
    const filtrado = selectType(listaPokemons, filtroType);
    pokemons(filtrado);
    typePercent();
};

const typePercent = () => {
    const filtroType = document.getElementById("filterType").value;
    let result = calcType(data.pokemon, filtroType);
    document.getElementById("regiao").innerText += `
    ${result}% dos Pokémons são originários desta região.`
};

document.getElementById("listaCompleta").onclick = () => {
    const cards = document.getElementById("pokemons");
    cards.innerHTML = "";
    pokemons(listaPokemons);
};