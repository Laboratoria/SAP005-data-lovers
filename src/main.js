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

const nameOrder = filter.filter()
const nameFilter = document.querySelector('.orderName');
let select = "";

nameFilter.addEventListener('change',(event)=>{
    select = event.target.value;
    console.log(select)
    document.getElementById('cards').innerHTML= "";

    if ("" === event.target.value) {
        showAllPokemons()
    } else if(select === 'az'){
        nameOrder.forEach(pokemon => {
            const image = document.createElement("img");
            image.src = pokemon.img
            document.getElementById('cards').appendChild(image);
            // const text = document.createElement('p');
            // text.innerHTML = pokemon.name   
            // document.getElementById('cards').appendChild(text); 
    
        });

    }else{
        let newArray = filter.filter()
        newArray.reverse()
        newArray.forEach(pokemon => {
            const image = document.createElement("img");
            image.src = pokemon.img
            document.getElementById('cards').appendChild(image);
            // const text = document.createElement('p');
            // text.innerHTML = pokemon.name   
            // document.getElementById('cards').appendChild(text); 
    
        });

    }
    
})


const typeElement = filter.type()
const selectType = document.querySelector('.filterType');
let choiseType = "";

selectType.addEventListener('change', (event) => {
     choiseType = event.target.value;
     console.log(choiseType)
    document.getElementById('cards').innerHTML = "";

    if ("" === event.target.value) {
        showAllPokemons()
    } else {
        typeElement.forEach(pokemonType => {
            let typeList = pokemonType.type;

            typeList.forEach(pokemon => {
                if (pokemon === choiseType) {
                    const image = document.createElement("img");
                    image.src = pokemonType.img
                    document.getElementById('cards').appendChild(image);
                }
            });
        });
    }
})



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
})