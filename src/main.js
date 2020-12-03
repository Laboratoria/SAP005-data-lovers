

import rickAndMorty from './data/rickandmorty/rickandmorty.js';

const allData = rickAndMorty.results;

//função filtrar
let arrayFiltrada = allData;

function getName(event) {
    event.preventDefault()
    let nome = document.getElementById("texto").value;
    nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();
    arrayFiltrada = allData.filter(personagem => personagem.name.startsWith(nome))

    secao.innerHTML = templateCard(arrayFiltrada);
}





document.getElementById("btn").addEventListener("click", getName)



//função cards 

function templateCard(allData) {


    let data = allData.map(personagem => `<div class="frontContainer"><img src=${personagem.image} alt="Avatar" class="img-card" /> 
<br> <b class="name">${personagem.name}  
</b></div>`)
    // document.getElementById("frontCard").innerHTML = data;


    let bData = allData.map(personagem => `<div class="backCard">  <h4><p> Name:  ${personagem.name} <br> Genus: 
   ${personagem.gender} <br> Status: ${personagem.status} <br> Species: ${personagem.species} <br> 
   Origin:${personagem.origin.name}<br> Location:${personagem.location.name}</h4></p></div>`)
    document.getElementById("backCard").innerHTML = bData;



    return data
}
const secao = document.getElementById("frontCard")
secao.innerHTML = templateCard(arrayFiltrada);




//função de ordenar

document.getElementById("oBtn").addEventListener("click", ordC)
function ordC(event) {
    event.preventDefault()
    const ordenaAZ = allData.sort((a, b) => {
        return (a.name < b.name) ? - 1 : 1
    })
    secao.innerHTML = templateCard(ordenaAZ);

}


document.getElementById("aBtn").addEventListener("click", ordD)
function ordD(event) {
    event.preventDefault()
    const ordenaZA = allData.sort((a, b) => (a.name > b.name) ? - 1 : 1)
    secao.innerHTML = templateCard(ordenaZA);

}

//calculo

const statusData = allData.map(i => i.status)

let alive = 0
let dead = 0
let unknown = 0


for (let j = 0; j < statusData.length; j++) {

    if (statusData[j] === 'Alive') {
        alive += 1
    }
    else if (statusData[j] === 'Dead') {
        dead += 1
    }
    else  {
        unknown += 1
    }
}
const total = alive + dead + unknown;
document.getElementById('alive').innerHTML = alive
document.getElementById('dead').innerHTML = dead
document.getElementById('unknown').innerHTML = unknown
document.getElementById('total').innerHTML = total



//grafico

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
  let graphic = google.visualization.arrayToDataTable([
  ['STATUS', 'QUANTIDADE'],
  ['vivo', alive],
  ['morto', dead],
   ['desconhecido', unknown]
  

]);

  let options = {'title':'STATUS', 'width':600, 'height':400 ,

colors:['#BA55D3','#008080','#7B68EE']
};



  let chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(graphic, options);
}


