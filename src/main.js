import filter from './data.js';

const img = filter.photo()
showAllPokemons()

function showAllPokemons() {
    img.forEach(pokemon => {
        const image = document.createElement("img");
        image.src = pokemon.img
        document.getElementById('cards').appendChild(image);
        // const text = document.createElement('p');
        // text.innerHTML = pokemon.name   
        // document.getElementById('cards').appendChild(text); 

    });
}


const weaknesses = filter.weaknesses()
const selectElement = document.querySelector('.fraquezas');
let elementoSelecionado = "";

selectElement.addEventListener('change', (event) => {
     elementoSelecionado = event.target.value;
    document.getElementById('cards').innerHTML = "";

    if ("" === event.target.value) {
        showAllPokemons()
    } else {
        weaknesses.forEach(pokemon => {
            let weaknessesList = pokemon.weaknesses;

            weaknessesList.forEach(weaknessesItem => {
                if (weaknessesItem === elementoSelecionado) {
                    const image = document.createElement("img");
                    image.src = pokemon.img
                    document.getElementById('cards').appendChild(image);
                }
            });
        });
    }
});