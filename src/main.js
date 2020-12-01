import rickAndMorty from './data/rickandmorty/rickandmorty.js';

const allData = rickAndMorty.results;


//console.log(ordena)
let arrayFiltrada = allData;

function getName(event) {
     event.preventDefault()
    let nome = document.getElementById("texto").value;
    nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();
     arrayFiltrada = allData.filter(personagem => personagem.name.startsWith(nome))
secao.innerHTML = templateCard(arrayFiltrada);
    }

   
   
   

    document.getElementById("btn").addEventListener("click", getName)
  





    //let arrayFiltrada = allData.find(personagens => personagens.starsWith('Rick'))
    //console.log(arrayFiltrada)
    //const arrayFiltrada = allData.map(personagem => personagem.name('Rick'))
    //const arrayFiltrada = allData.filter(personagem => personagem.name===buscar);


   // const resultado = allData.filter(rm=> rm.nome.toLowerCase() === 'Rick');
    //console.log(resultado);
    //let oi = allData.find(perso => perso.name('Rick')) ;
    //console.log(oi)
    function templateCard(allData){


    let data = allData.map(personagem => `<div class="frontContainer"><img src=${personagem.image} alt="Avatar" class="img-card" /> 
<br> <b class="name">${personagem.name}  
</b></div>`)
  // document.getElementById("frontCard").innerHTML = data;


   let bData = allData.map(personagem => `<div class="backCard">  <h4><p> <br> ${personagem.name} <br> Genus: 
   ${personagem.gender} <br> Status: ${personagem.status} <br> Species: ${personagem.species} <br> 
   Origin:${personagem.origin.name}<br> Location:${personagem.location.name}</h4></p></div>`)
       document.getElementById("backCard").innerHTML = bData;

    

    return data
    }
    const secao= document.getElementById("frontCard")
    secao.innerHTML = templateCard(arrayFiltrada);




//função de ordenar

    document.getElementById("oBtn").addEventListener("click", ordC)
    function ordC (event){
    event.preventDefault()
    const ordenaAZ = allData.sort((a,b) => {     return (a.name < b.name) ? - 1: 1
    })
    secao.innerHTML = templateCard(ordenaAZ);

    }


    document.getElementById("aBtn").addEventListener("click", ordD)
    function ordD (event){
    event.preventDefault()
    const ordenaZA = allData.sort((a,b) => {     return (a.name > b.name) ? - 1: 1
    })
    secao.innerHTML = templateCard(ordenaZA);

    }