import { filterType } from './data.js';
filterType

import data from './data/pokemon/pokemon.js';

const pokemons = data.pokemon;
const container = document.getElementById('container-card-poke');

addEventListener('load', () => {
    carregar(pokemons);
});
//evento para trazer os dados. 
//Load é executado depois que o carregamento da página tenha sido concluído e o usuário possa visualizar todo o documento, ou seja, para carregar scripts com muitos dados.

function carregar(p) {
    const data = p;
    return getPoke(data);
}
//função que servirá para trazer as funções do for 

const getPoke = (data) => {
    container.innerHTML = '';
    for (let poke of data) {
        const img = poke.img,
            num = poke.num,
            name = poke.name,
            type = poke.type,
            weaknesses = poke.weaknesses;

        cardInfo(img, num, name, type, weaknesses);
    } // loop para trazer os elementos
};

const cardInfo = (img, num, name, type, weaknesses) => {
    container.innerHTML += `
                         
                          <div class="flip-card">
                          <div class="card1">
                          <div class="flip-card-front">
                          <p class="card-info-poke"><img class="img" src=${img} alt="${name}"/></p>
                          <p class="card-info-poke"> ${num}</p> 
                          <p class="card-info-poke">${name}</p>
                          <p class="card-info-poke">${type}</p>
                          </div>
                          <div class="flip-card-back">
                          <p class="card-info-poke"> ${num}</p> 
                          <p class="card-info-poke">${name}</p>
                          <p class="card-info-poke">${type}</p>
                          <p class="card-info-poke">${weaknesses}</p>
                          </div>
                          </div>
                          </div>
                          
`}
// a tag li é usado para representar um item que faz parte de uma lista - coloca icone
// a tag ul representa uma lista de itens 
