import { filterType } from './data.js';

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
            id = poke.id,
            num = poke.num,
            name = poke.name,
            type = poke.type;
        cardInfo(img, num, name, type, id);
    } // loop para trazer os elementos
};

const cardInfo = (img, num, name, type, id) => {
    container.innerHTML += `
                        
                          <div class="card-lista" id=${id}>
                          <p class="card-info-poke"><img class="img" src=${img} alt="${name}"/></p>
                          <p class="card-info-poke"> ${num}</p> 
                          <p class="card-info-poke">${name}</p>
                          <p class="card-info-poke">${type}</p>
                          </div>`;
};
// a tag li é usado para representar um item que faz parte de uma lista - coloca icone
// a tag ul representa uma lista de itens 
