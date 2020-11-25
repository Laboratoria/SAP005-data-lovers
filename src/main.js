import { selectType, calcType, buscarNome, buscarNum } from './data.js';
import data from './data/pokemon/pokemon.js';

const listaPokemons = data.pokemon;

function pokemons(lista) {
    for (let item of lista) {
        document.body.querySelector(".pokemons").innerHTML += `
                <div class="card">
                    <div class="flip">
                        <div class="front-card">
                            ${item.name.toUpperCase()} <br>
                            ${item.num} <br>
                            <img src="${item.img}"> <br>
                            <b>Região: </b> ${item.generation.name} <br>
                            <b>Tipo: </b>${item.type.toString().replace(",", ", ")}
                        </div>
                        
                        <div class="back-card">
                            ${item.about}
                        </div>
                    </div>
                </div>
        `
    }
};

pokemons(listaPokemons);

document.getElementById("nomePokemon").oninput = () => {
    const nomePokemons = document.getElementById("nomePokemon").value;
    const pesquisaNome = buscarNome(data.pokemon, nomePokemons);
    pokemons(pesquisaNome);
    limparNome();
};

document.getElementById("numPokemon").oninput = () => {
    const numPokemons = document.getElementById("numPokemon").value;
    const pesquisaNum = buscarNum(data.pokemon, numPokemons);
    pokemons(pesquisaNum);
    limparNum();
};

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