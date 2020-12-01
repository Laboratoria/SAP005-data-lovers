import { searchFind} from '../src/data.js';

const arrayTeste= [
  {
    "num": "001",
    "name": "bulbasaur",
    "type": [
      "grass",
      "poison"
    ],
  },
  {
    "num": "002",
    "name": "ivysaur",
    "type": [
      "grass",
      "poison"
    ]
  }
]; 

 
describe('Verificar a função que Procura Card Unitário', () => {
  it('Verificar se é uma função', () => {
    expect(typeof searchFind).toBe('function');
  });

  it('Quando usuário colocar o valor, retornar posição da array correta', () => {
    let numberPokemon= '001';
    expect(searchFind(arrayTeste, numberPokemon)).toStrictEqual({"name": "bulbasaur", "num": "001", "type": ["grass", "poison"]});
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });