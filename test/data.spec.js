import { bringRivalPokemon, filterAllPokemonByType, orderBestPokemonByCP } from '../src/data.js';
const pokemons = {
  "pokemon": [
    {
      "name": "bulbasaur",
      "type": [
        "grass",
        "poison"
      ],
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "max-cp": "1115",
      },
      "name": "charizard",
      "type": [
        "fire",
        "flying"
      ],
      "stats": {
        "base-attack": "223",
        "base-defense": "173",
        "base-stamina": "186",
        "max-cp": "2889",
        "max-hp": "158"
      },
      "resistant": [
        "fire",
        "grass",
        "fighting",
        "bug",
        "steel"
      ],
      "weaknesses": [
        "water",
        "electric",
        "rock"
      ],
    }
  ]
};




/*describe('bringRivalPokemon é uma função?', () => {
  it('is a function', () => {
    expect(typeof bringRivalPokemon).toBe('function');
  });

  test('onPress gets called with the right thing', () => {
    const bringRivalPokemon = jest.fn();
    simulatePresses(bringRivalPokemon);
    expect(bringRivalPokemon).toBeCalledWith(
      expect.objectContaining({
        "name": pokemon.name,
        "num": pokemon.num,
        "image": pokemon.img,
        "type": pokemon.type,
        "resistant": pokemon.resistant,
        "weaknesses": pokemon.weaknesses  
      }),
    );
  });
}); */

describe('filterAllPokemonByType é uma função?', () => {
  it('is a function', () => {
    expect(typeof filterAllPokemonByType).toBe('function');
  });

  it('Mensagem de erro para número', () => {
    expect(() => filterAllPokemonByType())
  })
  

  it('retuns tipos de pokemons', () => {
    expect(filterAllPokemonByType()).toBe(types);
  });
});

describe('orderBestPokemonByCP é uma função?', () => {
  it('is a function', () => {
    expect(typeof orderBestPokemonByCP).toBe('function');
  });

  it('returns `types`', () => {
    expect(orderBestPokemonByCP()).toBe('types');
  });
});
