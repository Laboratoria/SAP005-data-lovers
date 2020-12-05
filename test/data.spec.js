import { bringRivalPokemon, filterPokemonByRivalWeakness, orderBestPokemonByCP, orderBestPokemonByName, calculation } from '../src/data.js';

const pokemonsTest = {
  pokemon: [{
    "name": "bulbasaur",
    "type": [
      "grass",
      "poison"
    ],
    "stats": {
      "max-cp": "1115"
    },
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ]
  },
  {
    "name": "charmander",
    "type": [
      "fire"
    ],
    "stats": {
      "max-cp": "980"
    },
    "weaknesses": [
      "water",
      "ground",
      "rock"
    ]
  },
  {
    "name": "weedle",
    "type": [
      "bug",
      "poison"
    ],
    "stats": {
      "max-cp": "456"
    },
    "weaknesses": [
      "fire",
      "flying",
      "psychic",
      "rock"
    ],
  },  
] 
};

// TESTE DA FUNÇÃO PELO NOME DO POKÉMON

describe('search pokemon by name', () => {
  it('should return a function', () => {
    expect(typeof bringRivalPokemon).toBe('function');
  });
  it('should return "bulbasaur" when search the pokemon by name "saur"', () => {
    const result = bringRivalPokemon(pokemonsTest.pokemon, "saur")
    expect(result[0].name).toEqual("bulbasaur")
  });
});

// TESTE DA FUNÇÃO DE FRAQUEZAS

describe('filter pokemons by rival weakness', () => {
  it('should return a function', () => {
    expect(typeof filterPokemonByRivalWeakness).toBe('function');
  });
  it('should return "bulbasaur", "charmander" and "weedle" weaknesses', () => {
    expect(filterPokemonByRivalWeakness(pokemonsTest)).toEqual([{
      "weaknesses": [
        "fire",
        "flying",
        "psychic",
        "rock"
      ]
    }, {
      "weaknesses": [
        "water",
        "ground",
        "rock"
      ]
    }, {
      "weaknesses": [
        "fire",
        "flying",
        "psychic",
        "rock"
      ],
    }]);
  });  
}); 

// TESTE DA ORDENAÇÃO CRESCENTE E DECRESCENTE DE CP

describe('Selecting pokemon by order growing and decreasing', () => {
  it('should return "bulbasaur", "charmander" and "weedle" by "crescentOrder" order', () => {
    const result = orderBestPokemonByCP(pokemonsTest.pokemon, "crescentOrder")
    expect(result).toEqual(pokemonsTest.pokemon)
  });
  it('should return "bulbasaur", "charmander" and "weedle" by "decrescentOrder" order', () => {
    const result = orderBestPokemonByCP(pokemonsTest.pokemon, "decrescentOrder")
    expect(result).toEqual(pokemonsTest.pokemon)
  });
})

// TESTE DA FUNÇÃO DE ORDENÇÃO DE A-Z E Z-A

describe('Selecting pokemon by order A-Z and Z-A', () => {
  it('should be a function', () => {
    expect(typeof orderBestPokemonByName).toBe('function');
  });
  it('should return "bulbasaur", "charmander" and "weedle" by "A-Z" order', () => {
    const result = orderBestPokemonByName(pokemonsTest.pokemon, "A_Z")
    expect(result).toEqual(pokemonsTest.pokemon)
  });
  it('should return "bulbasaur", "charmander" "weedle" by "Z-A" order', () => {
    const result = orderBestPokemonByName(pokemonsTest.pokemon, "Z_A")
    expect(result).toEqual(pokemonsTest.pokemon)
  });
})

// um segundo teste pelo nome caso o primeiro não dê certo

/*describe('Selecting pokemon by order A-Z and Z-A', () => {
  it('should be a function', () => {
    expect(typeof orderBestPokemonByName).toBe('function');
  });
  it('should return "bulbasaur", "charmander" and "weedle" by "A-Z" order', () => {
    expect(orderBestPokemonByName(pokemonsTest)).toEqual([{
      name: 'bulbasaur'
    }, {
      name: 'charmander'
    }, {
      name: 'weedle'
    }]);
  });  
  it('should return "bulbasaur", "charmander" "weedle" by "Z-A" order', () => {
    const result = orderBestPokemonByName(pokemonsTest.pokemon, "Z_A")
    expect(result).toEqual(pokemonsTest.pokemon)
  });
})*/

// TESTE DO CALCULO (FAZER O CALCULO AINDA)

describe('show the quantity by type', () => {
  it('should return a function', () => {
    expect(typeof calculation).toBe('function');
  });
  it('shold return 2 for type "poison"', () => {
    const result = calculation(pokemonsTest.pokemon, "poison", "type")
    expect(result).toEqual([{
      "type": [
        "grass",
        "poison"
      ]
    }, {
      "type": [
        "bug",
        "poison"
      ]
    }, 
  ]);
  });
});
