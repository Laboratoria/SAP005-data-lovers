import filter from '../src/data.js';


describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter.photo).toBe('function');
  });
  it('if the function receive photo ', ()=> {
    const expected = [
      {
      name: 'bulbasaur',
      img: "https://www.serebii.net/pokemongo/pokemon/001.png",
      num:"001",
      height: "0.71 m",
      weight: "6.9 kg",
      type: [
        "grass",
        "poison"
      ],
      weaknesses: [
        "fire",
        "ice",
        "flying",
        "psychic"
      ],
      egg: "2 km"
    }]
    expect(filter.photo()).toEqual(expect.arrayContaining(expected))
  })
});


describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter.filter).toBe('function');
  });
  it('if the function receive filter ', ()=> {
    const expected = 
      {
      name: "abra",
      img: "https://www.serebii.net/pokemongo/pokemon/063.png",
      num:"063",
      height: "0.89 m",
      weight: "19.5 kg",
      type: [
        "psychic"
      ],
      weaknesses:[
        "bug",
        "ghost",
        "dark"
      ],
      egg: "5 km"
    }
    expect(filter.filter()[0]).toEqual(expected)
  })
});

describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter.type).toBe('function');
  });
  it('if the function receive type ', ()=> {
    const expected = 
      {
      name: 'bulbasaur',
      img: "https://www.serebii.net/pokemongo/pokemon/001.png",
      num:"001",
      height: "0.71 m",
      weight: "6.9 kg",    
      type: [
        "grass",
        "poison"
      ],
      stats:"118",
      weaknesses: [
        "fire",
        "ice",
        "flying",
        "psychic"
      ],
      egg: "2 km"
    }
    expect(filter.type()[0]).toEqual(expected)
  })
});

describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter.pokedexFilter).toBe('function');
  });
  it('if the function receive filter ', ()=> {
    const expected = 
      {
      name: 'bulbasaur',
      img: "https://www.serebii.net/pokemongo/pokemon/001.png",
      num:"001",
      height: "0.71 m",
      weight: "6.9 kg",
      type: [
        "grass",
        "poison"
      ],
      weaknesses: [
        "fire",
        "ice",
        "flying",
        "psychic"
      ],
      egg: "2 km"
    }
    expect(filter.pokedexFilter()[0]).toEqual(expected)
  })
});

describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter.resistant).toBe('function');
  });
  it('if the function receive resistant ', ()=> {
    const expected = 
      {
      name: "squirtle",
      img: "https://www.serebii.net/pokemongo/pokemon/007.png",
      num:"007",
      resistant: [
        "fire",
        "water",
        "ice",
        "steel"
      ],
      height: "0.51 m",
      weight: "9.0 kg",    
      type: [
        "water"
      ],
      "weaknesses": [
        "electric",
        "grass"
      ],
      egg: "2 km"
    }
    expect(filter.resistant()[6]).toEqual(expected)
  })
});

describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter.weaknesses).toBe('function');
  });
  it('if the function receive weaknesses ', ()=> {
    const expected = 
      {
      name: "pikachu",
      img: "https://www.serebii.net/pokemongo/pokemon/025.png",
      num:"025",
      weaknesses:[
        "ground"
      ],
      height: "0.41 m",
      weight: "6.0 kg",    
      type: [
        "electric"
      ],
      egg: "2 km"
    }
    expect(filter.weaknesses()[24]).toEqual(expected)
  })
});