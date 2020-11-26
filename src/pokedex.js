import data from './data/pokemon/pokemon.js';
import {getPokemonIndexFromUrl} from './data.js';

getPokemonIndexFromUrl();

//console.log(document.getElementsByClassName('name-pokemon')[0]);

const pokemon = data.pokemon[getPokemonIndexFromUrl()];

document.getElementsByClassName('name-pokemon')[0].innerHTML = pokemon.name;
document.getElementsByClassName('pokedex-pokemon-img')[0].src = pokemon.img;
document.getElementsByClassName('pokedex-list-about')[0].innerHTML = pokemon.about;
document.getElementsByClassName('pokedex-list-type')[0].innerHTML = pokemon.type;
document.getElementsByClassName('pokedex-list-weaknesses')[0].innerHTML = pokemon.weaknesses;
document.getElementsByClassName('pokedex-list-resistant')[0].innerHTML = pokemon.resistant;

