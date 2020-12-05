import { getName } from '../src/data.js';
const personagens = [
  {"name": "Summer Smith",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Female",
"origin": {
    "name": "Earth (Replacement Dimension)",
},
"location": {
    "name": "Earth (Replacement Dimension)",
},
"image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg"},

{"name": "Summer Smith",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Female",
"origin": {
    "name": "Earth (C-137)",
},
"location": {
    "name": "Earth (C-137)",
},
"image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/338.jpeg"},  
{"name": "Summer Smith",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Female",
"origin": {
    "name": "Earth (Evil Rick's Target Dimension)",
},
"location": {
    "name": "Earth (Evil Rick's Target Dimension)",
},
"image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/339.jpeg"},{ 
  "name": "Rick Sanchez",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Male",
"origin": {
    "name": "Earth (C-137)",
},
"location": {
    "name": "Earth (Replacement Dimension)",
},
"image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg"},{
        "name": "Beth Smith",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Female",
"origin": {
    "name": "Earth (Replacement Dimension)",
},
"location": {
    "name": "Earth (Replacement Dimension)",
},
"image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/4.jpeg"

}]

describe('getName', () => {
  it('is a function', () => {
    expect(typeof getName).toBe('function');
  });

  it('returns `array`', () => {
    const expective = [{"name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
        "name": "Earth (Replacement Dimension)",
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg"},

{"name": "Summer Smith",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Female",
"origin": {
    "name": "Earth (C-137)",
},
"location": {
    "name": "Earth (C-137)",
},
"image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/338.jpeg"}, 
 {"name": "Summer Smith",
"status": "Alive",
"species": "Human",
"type": "",
"gender": "Female",
"origin": {
    "name": "Earth (Evil Rick's Target Dimension)",
},
"location": {
    "name": "Earth (Evil Rick's Target Dimension)",
},
"image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/339.jpeg"
    }]

     
      
    expect(getName(personagens, 'summer')).toEqual(expective);
  });
});

