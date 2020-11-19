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
const selectElementWeaknesses = document.querySelector('.weaknesses');
let elementoSelecionado = "";

selectElementWeaknesses.addEventListener('change', (event) => {
     elementoSelecionado = event.target.value;
    document.getElementById('cards').innerHTML = "";

    if ("" === elementoSelecionado) {
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

const resistant = filter.resistant()
const selectElementResistant = document.querySelector('.resistant');
let elementoSelecionadoResistant = "";

selectElementResistant.addEventListener('change', (event) => {
    elementoSelecionadoResistant = event.target.value;
    document.getElementById('cards').innerHTML = "";

    if ("" === elementoSelecionadoResistant) {
        showAllPokemons()
    } else {
        resistant.forEach(pokemon => {
            let resistantList = pokemon.resistant;

            resistantList.forEach(resistantItem => {
                if (resistantItem === elementoSelecionadoResistant) {
                    const image = document.createElement("img");
                    image.src = pokemon.img
                    document.getElementById('cards').appendChild(image);
                }
            });
        });
    }
});