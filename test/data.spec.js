import {filterByType, filterByName, filterByRarity, orderByName, filterByRegiao, sortCondition
} from '../src/js/data.js';

var pokemonJson = require('../src/data/pokemon/pokemon.json');
/* 
const arrayPokemonsTeste = [
    {"num": "244", "name": "entei", "type": ["fire"], "pokemon-rarity": "legendary"},
    {"num": "169", "name": "crobat", "type": ["poison", "flying"],"pokemon-rarity": "normal"},
    { "num": "039", "name": "Jigglypuff", "type": ["Normal"], "pokemon-rarity": "normal"}
] */



describe('Teste filtros', () => {
    it("Filtrar pokemons por tipo", () => {
        expect(filterByType(pokemonJson.pokemon, "fire").length).toEqual(22);
    });
    
    it("Filtrar pokemons por tipo todos", () => {
        expect(filterByType(pokemonJson.pokemon, "todos").length).toEqual(251);
    });
    
    it("Filtrar pokemons por nome", () => {
        expect(filterByName(pokemonJson.pokemon, "Jigglypuff").length).toEqual(1);
    });
    
    it("Filtrar pokemons por raridade", () => {
        expect(filterByRarity(pokemonJson.pokemon, "legendary").length).toEqual(9);
    });
    
    it("Filtrar pokemons por raridade todos", () => {
        expect(filterByRarity(pokemonJson.pokemon, "todos").length).toEqual(251);
    });
    
    it("Filtrar região", () => {
        expect(filterByRegiao(pokemonJson.pokemon, "kanto").length).toEqual(151);
    });
});

describe('Teste de ordenação', () => { 
    it("Ordenar por ordem alfabetica AZ", () => {
        expect(orderByName(pokemonJson.pokemon, "az")).toEqual(pokemonJson.pokemon.sort((pokemon1, pokemon2) => {
            if (pokemon1 < pokemon2) {
                return -1;
            }
            if (pokemon1 > pokemon2) {
                return 1;
            }
            return 0;
        }))
    });
    
    it("Ordenar por ordem alfabetica ZA", () => {
        expect(orderByName(pokemonJson.pokemon, "za")).toEqual(pokemonJson.pokemon.sort((pokemon1, pokemon2) => {
            if (pokemon1 < pokemon2) {
                return 1;
            }
            if (pokemon1 > pokemon2) {
                return -1;
            }
            return 0;
        }))
    });
});

describe('Teste sort condition', () => {
    it("Teste menor", () => {
        expect(sortCondition(pokemonJson.pokemon[0],pokemonJson.pokemon[1])).toEqual(-1)
    });
    
    it("Teste maior", () => {
        expect(sortCondition(pokemonJson.pokemon[1],pokemonJson.pokemon[0])).toEqual(1)
    });

    it("Teste igualdade", () => {
        expect(sortCondition(pokemonJson.pokemon[1],pokemonJson.pokemon[1])).toEqual(0)
    });
    
}); 