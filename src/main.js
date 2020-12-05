import rickAndMorty from './data/rickandmorty/rickandmorty.js';
import { getName, sortAZ, sortZA } from './data.js';

const allData = rickAndMorty.results;

let filter = allData;

document.getElementById("btn").addEventListener("click", (event) => {
    event.preventDefault()
    let name = document.getElementById("texto").value;
    const result = getName(allData, name)
    const section = document.getElementById("frontCard")
    section.innerHTML = templateCard(result);
});

function templateCard(allData) {
    let data = allData.map(personage => `<div class="frontContainer"><img src=${personage.image} alt="Avatar" class="img-card" /> 
<br> <b class="name">${personage.name}  
</b></div>`)

    let backData = allData.map(personage => `<div class="backCard">  <h4><p> Name:  ${personage.name} <br> Genus: 
   ${personage.gender} <br> Status: ${personage.status} <br> Species: ${personage.species} <br> 
   Origin:${personage.origin.name}<br> Location:${personage.location.name}</h4></p></div>`)
    document.getElementById("backCard").innerHTML = backData;

    return data
}
const mappedCards = document.getElementById("frontCard")
mappedCards.innerHTML = templateCard(filter);

document.getElementById("oBtn").addEventListener("click", orderAZ)
function orderAZ(event) {
    event.preventDefault()
    const callOrderAZ = sortAZ(allData);
    mappedCards.innerHTML = templateCard(callOrderAZ);
}

document.getElementById("aBtn").addEventListener("click", orderZA)
function orderZA(event) {
    event.preventDefault()
    const callOrderZA = sortZA(allData)
    mappedCards.innerHTML = templateCard(callOrderZA);
}

const statusData = allData.map(i => i.status)

let alive = 0
let dead = 0
let unknown = 0

for (let i = 0; i < statusData.length; i++) {

    if (statusData[i] === 'Alive') {
        alive += 1
    }
    else if (statusData[i] === 'Dead') {
        dead += 1
    }
    else {
        unknown += 1
    }
}
const result = alive + dead + unknown;
document.getElementById('alive').innerHTML = alive
document.getElementById('dead').innerHTML = dead
document.getElementById('unknown').innerHTML = unknown
document.getElementById('accountResult').innerHTML = result


google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let graphic = google.visualization.arrayToDataTable([
        ['STATUS', 'QUANTIDADE'],
        ['vivo', alive],
        ['morto', dead],
        ['desconhecido', unknown]
    ]);

    let options = {
        'title': 'STATUS', 'width': 500, 'height': 400,
        colors: ['#BA55D3', '#008080', '#7B68EE']
    };

    let chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(graphic, options);
}

