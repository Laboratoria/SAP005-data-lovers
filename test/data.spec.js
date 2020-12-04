import {
  orderPokemon,
  typePokemon,
  namePokemon,
  calculusPokemon
} from '../src/data.js';

describe('test function namePokemon', () => {
  it('is function', () => {
    expect(typeof namePokemon).toBe('function');
  });

  it('return name pokemons', () => {
    const pokemons = [{
      "name": "alakazam",
    }, {
      "name": "bulbasauro",
    }];
    let searchName = "bul";
    const namePoke = namePokemon(pokemons, searchName)
    expect(namePoke[0].name).toEqual("bulbasauro")
  });
});

describe('test function typePokemon', () => {
  it('is function', () => {
    expect(typeof typePokemon).toBe('function');
  });

  it('return type pokemons', () => {
    const pokemons = [{
      "name": "alakazam",
      "type": "psychic"
    }, {
      "name": "ekans",
      "type": "poison"
    }];
    let filterType = "psychic";
    const typePoke = typePokemon(pokemons, filterType)
    expect(typePoke[0].name).toEqual('alakazam');
  });
});

describe('test function calculusPokemon', () => {
  it('is function', () => {
    expect(typeof calculusPokemon).toBe('function');
  });

  it('return calculus pokemons', () => {
    const pokemons = [{
      "name": "alakazam",
      "type": "psychic"
    }, {
      "name": "ekans",
      "type": "poison"
    }, {
      "name": "ivysaur",
      "type": ["poison", "grass"]
    }, {
      "name": "pikachu",
      "type": "eletric"
    }];
    let filterType = "poison";
    const typePoke = typePokemon(pokemons, filterType)
    const calculusPoke = calculusPokemon(pokemons, typePoke)
    expect(calculusPoke).toEqual(50);
  });
});

describe('test function orderPokemon', () => {
  it('is function', () => {
    expect(typeof orderPokemon).toBe('function');
  });

  it('return array filter order', () => {
    const pokemons = [{
      "name": "zubat"
    }, {
      "name": "alakazam"
    }];
    const orderPoke = orderPokemon(pokemons, "A-Z");
    expect(orderPoke[0].name).toEqual("alakazam");
  });

  it('return array filter order', () => {
    const pokemons = [{
      "name": "alakazam"
    }, {
      "name": "zubat"
    }];
    const orderPoke = orderPokemon(pokemons, "Z-A");
    expect(orderPoke[0].name).toEqual("zubat");
  });

  it('return array filter order', () => {
    const pokemons = [{
      "name": "alakazam",
      "num": "065"
    }, {
      "name": "zubat",
      "num": "041"
    }];
    const orderPoke = orderPokemon(pokemons, "0-251");
    expect(orderPoke[0].name).toEqual("zubat");
  });
});
