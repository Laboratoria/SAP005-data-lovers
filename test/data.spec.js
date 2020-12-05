import pokemon from '../src/data.js';

const 

describe('Função pesquisaPokemon', () => {
  it('É uma função', () => {
    expect(typeof pokemon.pesquisaPokemon).toBe('function');
  });
  it('Da erro para entrada do tipo number', () =>{
    expect(() => pokemon.pesquisaPokemon(5)).toThrow(TypeError);
  });
   it('Se escrever Pikachu deve retornar um array', () => { 
     expect(typeof pokemon.pesquisaPokemon('string')).toBe('array')
   }); 
 

/*describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });*/
});
