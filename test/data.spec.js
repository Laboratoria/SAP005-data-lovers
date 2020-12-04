import {decrescent,crescent,searchFind,searchFilter} from '../src/data.js';

const dataTest = {"pokemon":[{
  "num": "001",
  "name": "bulbasaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
  "size": {
    "height": "0.71 m",
    "weight": "6.9 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]
},{
  "num": "009",
  "name": "blastoise",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
  "img": "https://www.serebii.net/pokemongo/pokemon/009.png",
  "size": {
    "height": "1.60 m",
    "weight": "85.5 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "water"
  ]
},
{
  "num": "002",
  "name": "ivysaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
  "img": "https://www.serebii.net/pokemongo/pokemon/002.png",
  "size": {
    "height": "0.99 m",
    "weight": "13.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]
},
{
  "num": "003",
  "name": "venusaur",
  "generation": {
    "num": "generation i",
    "name": "kanto"
  },
  "about": "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.",
  "img": "https://www.serebii.net/pokemongo/pokemon/003.png",
  "size": {
    "height": "2.01 m",
    "weight": "100.0 kg"
  },
  "pokemon-rarity": "normal",
  "type": [
    "grass",
    "poison"
  ]}]};

let arrayTest = dataTest.pokemon;
const typeWater = [{"num": "009",
"name": "blastoise",
"generation": {
  "num": "generation i",
  "name": "kanto"
},
"about": "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet.",
"img": "https://www.serebii.net/pokemongo/pokemon/009.png",
"size": {
  "height": "1.60 m",
  "weight": "85.5 kg"
},
"pokemon-rarity": "normal",
"type": [
  "water"
]}];

//Find
describe('Realizar testes no campo de busca (com uso de metodo Find) ', () => {
  it('Verificar se é uma função', () => {
    expect(typeof searchFind).toBe('function');
  });

  it('Quando usuário colocar o valor, retornar posição da array correta', () => {
    const numberPokemon= '001';
    const result = searchFind(arrayTest, numberPokemon)
    expect(result).toStrictEqual({"num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "about": "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    "img": "https://www.serebii.net/pokemongo/pokemon/001.png",
    "size": {
      "height": "0.71 m",
      "weight": "6.9 kg"
    },
    "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ]});
  });
})

//Sort - Crescente
describe('Realizar testes no campo de ordenação (com uso de metodo sort)', () => {
  it('Verificar se é uma função', () => {
    expect(typeof crescent).toBe('function');
  });

  it('Quando o usuário acionar a função, devolve ordenado por nome', () => {
    expect(crescent(arrayTest)).toBe(arrayTest);
  });
})

//Sort - decrescente
describe('Realizar testes no campo de ordenação (com uso de metodo sort)', () => {
  it('Verificar se é uma função', () => {
    expect(typeof decrescent).toBe('function');
  });

  it('Quando o usuário acionar a função, devolve ordenado por nome', () => {
        expect(decrescent(arrayTest)).toBe(arrayTest);
  });
})

//Filter
describe('Verificar a função que Procura Card Unitário', () => {
  it('Verificar se é uma função', () => {
    expect(typeof searchFilter).toBe('function');
  });

  it('Quando usuário colocar o valor, retornar posição da array correta (com uso de metodo Filter)', () => {
    const typePokemon= 'water';
    const result = searchFilter(arrayTest, typePokemon);
    expect(result).toStrictEqual(typeWater)
  });
})

// // describe('anotherExample', () => {
// //   it('is a function', () => {
// //     expect(typeof anotherExample).toBe('function');
// //   });

// //   it('returns `anotherExample`', () => {
// //     expect(anotherExample()).toBe('OMG');
// //   });
// // });