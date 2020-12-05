import * as filtros from './data.js';
import data from '../data/pokemon/pokemon.js';

//*---------------- CONSTANTES E VARIAVEIS ---------------------*/
const pokemons = data.pokemon;
var buttonKanto = document.getElementById("botaoKanto");
var buttonJohto = document.getElementById("botaoJohto");

//*---------------- FUNCTIONS ---------------------*/
function inputKantoCalculo(){
    let value = document.getElementById("inserir-kanto-quantidade").value;
    let valorPokemon = filtros.filterByRegiao(pokemons, "kanto").length
    let valorTotal = valorPokemon - value;
    document.getElementById("inserir-kanto").innerHTML = "Faltam para você completar a pokédex de kanto " + valorTotal + " pokemons"
}

function inputJohtoCalculo(){
    let value = document.querySelector('#inserir-johto-quantidade').value;
    let valorPokemon = filtros.filterByRegiao(pokemons, "johto").length
    let valorTotal = valorPokemon - value;
    console.log(valorTotal);
    document.getElementById("inserir-johto").innerHTML = "Faltam para você completar a pokédex de johto " + valorTotal + " pokemons"
}
//*---------------- LISTENERS ---------------------*/
buttonKanto.addEventListener('click', (event) => {
    event.preventDefault();
    inputKantoCalculo()});

buttonJohto.addEventListener('click', (event) => {
    inputJohtoCalculo();
    event.preventDefault();
    });
