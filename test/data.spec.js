import { filterGenderSelected} from '../src/data.js';

const dataBaseTeste = [
  {
    "id": 3,
          "name": "Summer Smith",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Female",
          
          },
  {        
    "id": 26,
          "name": "Arthricia",
          "status": "Alive",
          "species": "Alien",
          "type": "Cat-Person",
          "gender": "Female",
    
        },
  {
    "id": 381,
          "name": "Woman Rick",
          "status": "Alive",
          "species": "Alien",
          "type": "Chair",
          "gender": "Female",
  },
  {
    "id": 69,
          "name": "Commander Rick",
          "status": "Dead",
          "species": "Human",
          "type": "",
          "gender": "Male",
  },
  {
    "id": 252,
          "name": "Noob-Noob",
          "status": "Alive",
          "species": "Poopybutthole",
          "type": "",
          "gender": "Male",
  },
  {
    "id": 475,
          "name": "Dancer Morty",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
  },
  {
    "id": 492,
          "name": "Varrix",
          "status": "Alive",
          "species": "Alien",
          "type": "",
          "gender": "unknown",
  },
  {
    "id": 35,
          "name": "Bepisian",
          "status": "Alive",
          "species": "Alien",
          "type": "Bepisian",
          "gender": "unknown",
  },
  {
    "id": 104,
          "name": "Doom-Nomitron",
          "status": "Dead",
          "species": "Alien",
          "type": "Shapeshifter",
          "gender": "unknown",
  },
  {
    "id": 105,
          "name": "Dr. Glip-Glop",
          "status": "Dead",
          "species": "Alien",
          "type": "",
          "gender": "Male",
  },
  {
    "id": 19,
          "name": "Antenna Rick",
          "status": "unknown",
          "species": "Human",
          "type": "Human with antennae",
          "gender": "Male",
  },
  {
    "id": 369,
          "name": "Tusked Assassin",
          "status": "unknown",
          "species": "Alien",
          "type": "Tuskfish",
          "gender": "Male",
  },
  {
    "id": 249,
          "name": "Mrs. Sanchez",
          "status": "unknown",
          "species": "Human",
          "type": "",
          "gender": "Female",
  },
  {

  }

]

describe('Filtrar Genero Feminino', () => {
  it('é uma função', () => {
    expect(typeof filterGenderSelected).toBe('function');
  });

  it('retornar personagens femininos', () => {
    const gender = "Female"
    expect(filterGenderSelected(dataBaseTeste,gender)).toBe("Female");
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
