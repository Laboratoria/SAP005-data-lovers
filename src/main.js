import filter from './data.js';
function clear(){
    document.getElementById('cards').innerHTML= ""; 
    document.getElementById('calculation').innerHTML= "";

    return
}
const dados = {
    show(pokemon){
        const flipCard = document.createElement('div')
        flipCard.classList.add("flip-card") 
        const flipCardInner = document.createElement('div')
        flipCardInner.classList.add("flip-card-inner")

        const flipCardFront = document.createElement('div')
        flipCardFront.classList.add("flip-card-front")

        const flipCardBack = document.createElement('div')
        flipCardBack.classList.add("flip-card-back")

        const text = document.createElement("p");
        text.classList.add("namePokemon")
        const textNum = document.createElement("p");
        textNum.classList.add("pokedexNum")
        const image = document.createElement("img");
        const type = document.createElement("p");
        const ovos = document.createElement("p");
        const altura = document.createElement("p");
        const peso = document.createElement ("p");
        type.classList.add("tipoPokemon'")
        image.src = pokemon.img
        text.innerHTML = pokemon.name.toUpperCase();
        textNum.innerHTML = pokemon.num
        altura.innerHTML = `Altura: ${pokemon.height}`
        peso.innerHTML = `Peso: ${pokemon.weight}`
        ovos.innerHTML = `Ovo: ${pokemon.egg}`
        type.innerHTML = `Tipo: ${pokemon.type}`
        
        
        textNum.innerHTML = pokemon.num        
         
        document.getElementById("cards").appendChild(flipCard);
        flipCard.appendChild(flipCardInner);       
        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);     
        flipCardFront.appendChild(text);
        text.appendChild(textNum);
        text.appendChild(image);

        flipCardBack.appendChild(type);
        flipCardBack.appendChild(altura);
        flipCardBack.appendChild(peso);
        flipCardBack.appendChild (ovos);
      
    } 
}

const img = filter.photo()

function showAllPokemons() { 
    img.forEach(pokemon => {
        dados.show(pokemon);
    });
} showAllPokemons();



const allPokemon = document.getElementById('btnAll')

allPokemon.addEventListener("click", ()=>{
    document.getElementById('txtSearch').value = ""
    clear(); 
    return showAllPokemons();
})


const name = filter.filter()
const button = document.querySelector('#btn')


button.addEventListener('click', (e)=>{
    e.preventDefault()
    const search = document.querySelector('#txtSearch')
    let searchOption =  search.value.toLowerCase()
    clear();
    if("" !== searchOption){
    const pokemon = name.find(item => item.name == searchOption)
    if(pokemon !== undefined){
            dados.show(pokemon); 
        }else{
            const textNotFound = document.createElement('p');          
            textNotFound.innerHTML = "Ops... Esse pokémon não foi encontrado!"  
            document.getElementById('cards').appendChild(textNotFound);
          
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
    clear();
    if ("" === event.target.value) {
        showAllPokemons()
    } else if(select === 'az'){
        nameOrder.forEach(pokemon => {
            dados.show(pokemon);    
        });

    }else{
        let newArray = filter.filter()
        newArray.reverse()
        newArray.forEach(pokemon => {
            dados.show(pokemon);  
    
        });

    }    
})


const pokedex = filter.pokedexFilter()
const selectElementPokedex = document.querySelector('.order');
let elementoSelecionadoPokedex = "";

selectElementPokedex.addEventListener('change', (event) => {
    elementoSelecionadoPokedex = event.target.value;
    clear();
    if (elementoSelecionadoPokedex === "") {
        showAllPokemons()

    } else if(elementoSelecionadoPokedex === '1a251'){
        pokedex.forEach(pokemon => {
            dados.show(pokemon); 
    
        });
    }else{  
        let newArray = filter.pokedexFilter()
        newArray.reverse()
        newArray.forEach(pokemon => {
            dados.show(pokemon);  
        });
    }
})


const typeElement = filter.type()
const selectType = document.querySelector('.filterType');
let choiseType = "";


selectType.addEventListener('change', (event) => {
    let sum = 0;
    let counter = 0
    let average = 0
     choiseType = event.target.value;
     clear();

    if ("" === choiseType) {
        showAllPokemons()
    }else{
        typeElement.forEach( pokemon => {
            let typeList = pokemon.type;

            typeList.forEach(pokemonType => {
                if (pokemonType === choiseType) {
                    sum += Number(pokemon.stats)
                    counter += 1
                    average = Math.floor(sum / counter)       
                    
                    dados.show(pokemon);
                }
            });
        });

        const messageType = document.createElement('p');
        messageType.classList.add('typePokemon')
        messageType.innerHTML = "A média de ataque dos Pokémons do tipo escolhido é de " + average
        document.getElementById("calculation").appendChild(messageType);
    }
})



const weaknesses = filter.weaknesses()
const selectElementWeaknesses = document.querySelector('.weaknesses');
let elementoSelecionado = "";

selectElementWeaknesses.addEventListener('change', (event) => {
     elementoSelecionado = event.target.value;
     clear();

    if ("" === elementoSelecionado) {
        showAllPokemons()
    }else{
        weaknesses.forEach(pokemon => {
            let weaknessesList = pokemon.weaknesses;

            weaknessesList.forEach(weaknessesItem => {
                if (weaknessesItem === elementoSelecionado) {
                    dados.show(pokemon);  
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
    clear();

    if ("" === elementoSelecionadoResistant) {
        showAllPokemons()
    } else {
        resistant.forEach(pokemon => {
            let resistantList = pokemon.resistant;

            resistantList.forEach(resistantItem => {
                if (resistantItem === elementoSelecionadoResistant) {
                    dados.show(pokemon);  
                }
            });
        });
    }
});
