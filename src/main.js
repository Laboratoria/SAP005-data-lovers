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

//  arrayFiltrada = allData.filter(personagem => personagem.status.startsWith(nome))
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




// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  let graphic = google.visualization.arrayToDataTable([
  ['STATUS', 'QUANTIDADE'],
  ['vivo', alive],
  ['morto', dead],
   ['desconhecido', unknown]
  

]);

  // Optional; add a title and set the width and height of the chart
  let options = {'title':'STATUS', 'width':600, 'height':400 
};

  // Display the chart inside the <div> element with id="piechart"
  let chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(graphic, options);
}




//console.log(unknown)




//  const contaStatus = statusData.map(i => i )





//    console.log(statusData)

