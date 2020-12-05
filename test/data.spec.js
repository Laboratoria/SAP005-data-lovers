<<<<<<< HEAD
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
=======
import { bringRivalPokemon, filterAllPokemonByType, filterPokemonByRivalWeakness, orderBestPokemonByCP, orderBestPokemonByName } from '../src/data.js';
import { pokemons } from './mock.js';

describe('bringRivalPokemon:', () => {
  it('should be a function', () => {
    expect(typeof bringRivalPokemon).toBe('function')
  })

  it('should return the object of the pokémon Bulbasaur if the input is "bulb"', () => {
    expect(bringRivalPokemon(pokemons, "bulb")).toStrictEqual(pokemons[0])
  })

  it('should return the object of the pokémon Cindaquil if the input is "aqui"', () => {
    expect(bringRivalPokemon(pokemons, "aqui")).toStrictEqual(pokemons[2])
  })
});

describe('filterAllPokemonByType:', () => {
  it('should be a function', () => {
    expect(typeof filterAllPokemonByType).toBe('function')
  })

  it('should return the object "types" with the types of pokémon inside each array', () => {
    expect(filterAllPokemonByType(pokemons)).toStrictEqual(
      {
        bug: [pokemons[4], pokemons[10]],
        dragon: [pokemons[7]],
        fairy: [pokemons[8]],
        fire: [pokemons[1], pokemons[2]],
        ghost: [pokemons[9]],
        ground: [pokemons[3]],
        normal: [pokemons[8]],
        psychic: [pokemons[5]],
        steel: [pokemons[10]],
        dark: [pokemons[11], pokemons[13]],
        electric: [pokemons[6]],
        fighting: [pokemons[12]],
        flying: [pokemons[1]],
        grass: [pokemons[0]],
        ice: [pokemons[13]],
        poison: [pokemons[0], pokemons[4], pokemons[9]],
        rock: [pokemons[3], pokemons[11]],
        water: [pokemons[6]],
      }
    )
  })
});

describe('filterPokemonByRivalWeakness:', () => {
  it('should be a function', () => {
    expect(typeof filterPokemonByRivalWeakness).toBe('function')
  })

  it('should return the pokémons Bulbasaur and Onix when the user input is "lanturn"', () => {
    expect(filterPokemonByRivalWeakness(pokemons, "lanturn")).toStrictEqual([pokemons[0], pokemons[3]])
  })

  it('should return the pokémons Charizard and Cyndaquil when the user input is "forretress"', () => {
    expect(filterPokemonByRivalWeakness(pokemons, "forretress")).toStrictEqual([pokemons[1], pokemons[2]])
  })
>>>>>>> fae228ece152b68445dc3b0600f3370455e64189
});

describe('orderBestPokemonByCP:', () => {
  it('should be a function', () => {
    expect(typeof orderBestPokemonByCP).toBe('function')
  })

  it('should return the pokémons in crescent and decrescent order by CP', () => {
    expect(orderBestPokemonByCP(pokemons, "drowzee")).toStrictEqual(
      {
        crescentOrder: [pokemons[13], pokemons[4], pokemons[10], pokemons[9], pokemons[11]],
        decrescentOrder: [pokemons[11], pokemons[9], pokemons[10], pokemons[4], pokemons[13]]
      }
    )
  })
})

describe('orderBestPokemonByName:', () => {
  it('should be a function', () => {
    expect(typeof orderBestPokemonByName).toBe('function')
  })

  it('should return the pokémons in A-Z and Z-A alphabetical order by name', () => {
    expect(orderBestPokemonByName(pokemons, "drowzee")).toStrictEqual(
      {
        A_Z: [pokemons[10], pokemons[9], pokemons[13], pokemons[11], pokemons[4]],
        Z_A: [pokemons[4], pokemons[11], pokemons[13], pokemons[9], pokemons[10]]
      }
    )
  })
})