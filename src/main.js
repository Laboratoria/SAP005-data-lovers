// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
//
import rickAndMorty from './data/rickandmorty/rickandmorty.js';

//const { default: rickAndMorty } = require("./data/rickandmorty/rickandmorty");

   // let nomes = ["Diego", "Gabriel", "Lucas"];const allData = rickAndMorty.results;
   // let lista = document.querySelector('#lista');
  //const allData = rickAndMorty.results; 
  //const data = allData[1];
   
  // Objeto de objetos

 
 const allData = rickAndMorty.results;
//const data = allData.results
//let data = allData.map(item => `<div class="fcard"><img src="${item.image}" alt="Avatar" class="img-card"/> style="width:100%" /> <h1> <b>${item.name}</b></h1></div>`)
//document.getElementById("root").innerHTML = data;

//const data = allData[1];
//
//const allData = rickAndMorty.results;

//for(let data of allData){

 //   console.log('specie: '+ data.specie);
//  console.log('status: '+ data.status);
//    console.log('genero: '+ data.gender);
   // console.log('image: '+ data.image);
 //   console.log("-------------------------");
   //document.querySelector('#print').innerHTML = allData;
 //  // document.getElementById("root").appendChild(data.name);
    
//}


//function teste (){
//const allData = document.querySelector ('#root').value;
//document.querySelector('#print').innerHTML = allData;

//}
//
//const allData = rickAndMorty.results;

//for(let data of allData){

// console.log('specie: '+ data.specie);
// console.log('status: '+ data.status);
// console.log('genero: '+ data.gender);
// console.log('image: '+ data.image); 
// console.log("-------------------------");
// document.getElementById("root").appendChild(data.name);

//}


//var citricos = allData.slice(1, 3);
//document.getElementById("root").innerHTML = citricos;




//document.getElementById("root").innerHTML = data;
//for(var i = 0; i < 16; i++){  
//var img = document.createElement("img"); //criar elemento img
//var img.src = "dados.img" + i + ".jpg"; //atribuindo a propriedade source da imagem    
//document.getElementById("root").appendChild(img); //adicionando imagem como filha de demo
//}


//const data = allData.results

//const data = allData[1];
//data = document.getElementById("root").value;

// let nomes = ["Diego", "Gabriel", "Lucas"];const allData = rickAndMorty.results;
// let lista = document.querySelector('#lista');
// const allData = rickAndMorty.results; 
//const data = allData[1];



//const allData = rickAndMorty.results;
//const data = allData.results

//const data = allData[1];
//data = document.getElementById("root").value;


// content.innerHTML = data;
// teste.appendChild(content);
// //const teste = document.getElementByIdsa
//console.log(data)

//document.getElementById("root").innerHTML = 
//document.write(data);

//const data = allData.map(item =>'' item.name  + item.status  + item.species  + item.gender + `<img src="${item.image}" />`)
//MAP

// para pegar os dados do rickandmorty.js
// <b>Genus:</b> ${item.gender} <br><b> Status:</b> ${item.status} <br> <b>Species:</b> ${item.species}
let data = allData.map(item => `<div class="fcard"><img src=${item.image} alt="Avatar" class="img-card" /> <b class="name">${item.name} </b></div>`) 
document.getElementById("fcard").innerHTML = data; 

let bData = allData.map(item =>  `<div class="bcard"><p><h4> <br> Genus: ${item.gender} <br> Status: ${item.status} <br> Species: ${item.species}</h4></p></div>`)
document.getElementById("bcard").innerHTML = bData; 




//console.log(vetor)
//const splitar =
    //function splitString(stringToSplit, separator) {
       // var arrayOfStrings = stringToSplit.split(separator);



        //document.getElementById("root").innerHTML = vetor;


//const {name,status,species} = (".src/data/rickandmorty/rickandmorty.json")

//console.log(`name: ${name}, o status é ${status}, ele é da espécie ${species}`)
//rickAndMorty.forEach(function(allData){
  //  console.log(dados);
//});

//document.getElementById("root").innerHTML = 
//document.write(data);


//document.getElementById("root").innerHTML = 
//document.write(data);


//MAP
//const vetor = allData.map(item => item.name  + item.status  + item.species  + item.gender)
 //document.getElementById("root").innerHTML = vetor;





//console.log(vetor)
//const splitar =
    //function splitString(stringToSplit, separator) {
       // var arrayOfStrings = stringToSplit.split(separator);



        //document.getElementById("root").innerHTML = vetor;


//const {name,status,species} = (".src/data/rickandmorty/rickandmorty.json")

//console.log(`name: ${name}, o status é ${status}, ele é da espécie ${species}`)
//rickAndMorty.forEach(function(allData){
  //  console.log(dados);
//});
