// import { example } from './data.js';
// // import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
//
import rickAndMorty from './data/rickandmorty/rickandmorty.js';

//const { default: rickAndMorty } = require("./data/rickandmorty/rickandmorty");

//
const allData = rickAndMorty.results;

for(let data of allData){

    console.log('specie: '+ data.specie);
    console.log('status: '+ data.status);
    console.log('genero: '+ data.gender);
   // console.log('image: '+ data.image);
    console.log("-------------------------");
   // document.getElementById("root").appendChild(data.name);
    
}


var citricos = allData.slice(1, 3);
document.getElementById("root").innerHTML = citricos;




//document.getElementById("root").innerHTML = data;
//for(var i = 0; i < 16; i++){  
//var img = document.createElement("img"); //criar elemento img
//var img.src = "dados.img" + i + ".jpg"; //atribuindo a propriedade source da imagem    
//document.getElementById("root").appendChild(img); //adicionando imagem como filha de demo
//}


//const data = allData.results

//const data = allData[1];
//data = document.getElementById("root").value;


// content.innerHTML = data;
// teste.appendChild(content);
// //const teste = document.getElementByIdsa
//console.log(data)

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