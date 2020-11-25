import filter from './data.js';

const img = filter.photo()
showAllPokemons()


function showAllPokemons() {
    img.forEach(pokemon => {
        const text = document.createElement('p');
        const image = document.createElement("img");
        image.src = pokemon.img
        text.innerHTML = pokemon.name  
        document.getElementById('cards').appendChild(text);
        text.appendChild(image);   

    });
}

const name = filter.filter()

const button = document.querySelector('#btn')

button.addEventListener('click', (e)=>{
    e.preventDefault()
    const search = document.querySelector('#txtSearch')
    let searchOption =  search.value
    document.getElementById('cards').innerHTML= "";
 
    if("" !== searchOption){
       const found = name.find(pokemon => pokemon.name == searchOption)
       if(found !== undefined){
            const text = document.createElement('p');
            const image = document.createElement("img");
            image.src = found.img
            text.innerHTML = found.name  
            document.getElementById('cards').appendChild(text);
            text.appendChild(image); 
        }else{
            const textNotFound = document.createElement('p');
            const imageNotFound = document.createElement("img");
            const btn = document.createElement("button");
            imageNotFound.src = "./img/nao-encontrado.png"           
            textNotFound.innerHTML = "Ops... Esse pokémon não foi encontrado!"  
            document.getElementById('cards').appendChild(textNotFound);
            textNotFound.appendChild(imageNotFound);
            textNotFound.appendChild(btn);

            imageNotFound.classList.add('imageNotFound');
            textNotFound.classList.add('textNotFound');
        }
        
    
    
    }else{
        showAllPokemons()
    }

});




const nameOrder = filter.filter()
const nameFilter = document.querySelector('.orderName');
let select = "";

nameFilter.addEventListener('change',(event)=>{
    select = event.target.value;
    document.getElementById('cards').innerHTML= "";

    if ("" === event.target.value) {
        showAllPokemons()
    } else if(select === 'az'){
        nameOrder.forEach(pokemon => {
            const text = document.createElement('p');
            const image = document.createElement("img");
            image.src = pokemon.img
            text.innerHTML = pokemon.name  
            document.getElementById('cards').appendChild(text);
            text.appendChild(image);   
    
        });

    }else{
        let newArray = filter.filter()
        newArray.reverse()
        newArray.forEach(pokemon => {
            const text = document.createElement('p');
        const image = document.createElement("img");
        image.src = pokemon.img
        text.innerHTML = pokemon.name  
        document.getElementById('cards').appendChild(text);
        text.appendChild(image);   
    
        });

    }
    
})

const pokedex = filter.pokedexFilter()
const selectElementPokedex = document.querySelector('.order');
let elementoSelecionadoPokedex = "";

selectElementPokedex.addEventListener('change', (event) => {
    elementoSelecionadoPokedex = event.target.value;
    document.getElementById('cards').innerHTML = "";

    if (elementoSelecionadoPokedex === "") {
        showAllPokemons()

    } else if(elementoSelecionadoPokedex === '1a251'){
        pokedex.forEach(pokemon => {
            const text = document.createElement('p');
            const image = document.createElement("img");
            image.src = pokemon.img
            text.innerHTML = pokemon.name  
            document.getElementById('cards').appendChild(text);
            text.appendChild(image);   
    
        });

    }else{
        let newArray = filter.pokedexFilter()
        newArray.reverse()
        newArray.forEach(pokemon => {
        const text = document.createElement('p');
        const image = document.createElement("img");
        image.src = pokemon.img
        text.innerHTML = pokemon.name  
        document.getElementById('cards').appendChild(text);
        text.appendChild(image);   
    
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

    if ("" === choiseType) {
        showAllPokemons()
    } else {
        typeElement.forEach(pokemonType => {
            let typeList = pokemonType.type;

            typeList.forEach(pokemon => {
                if (pokemon === choiseType) {
                    const text = document.createElement('p');
                    const image = document.createElement("img");
                    image.src = pokemonType.img
                    text.innerHTML = pokemonType.name  
                    document.getElementById('cards').appendChild(text);
                    text.appendChild(image);   
                }
            });
        });
    }
})



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
                    const text = document.createElement('p');
                    const image = document.createElement("img");
                    image.src = pokemon.img
                    text.innerHTML = pokemon.name  
                    document.getElementById('cards').appendChild(text);
                    text.appendChild(image);   
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
                    const text = document.createElement('p');
                    const image = document.createElement("img");
                    image.src = pokemon.img
                    text.innerHTML = pokemon.name  
                    document.getElementById('cards').appendChild(text);
                    text.appendChild(image);   
                }
            });
        });
    }
});
