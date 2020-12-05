import { imprimeCards } from '../src/data.js';
//import rickandmorty from '../src/data/rickandmorty/rickandmorty.js';


describe(imprimeCards, () => {
  it('is a function', () => {
    expect(typeof imprimeCards).toBe('function');
  });

  it('returns `card`', () => {
    expect(imprimeCards()).toBe('card');
  });
});

/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
