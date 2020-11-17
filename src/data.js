import data from "./data/pokemon/pokemon.js"

const filter = {
  photo(){
    const image = data.pokemon.map(img =>{
      return {
        name: img.name,
        img: img.img
      }
    })
    const imageCard = image.map( imgCard =>{
      return imgCard.img;
    })  
    return imageCard

  },
  
  filter(){
    const orderName = data.pokemon.map(item => {
      
      return {
        name: item.name,
        img: item.img
      }
    })
    const order = orderName.sort(function (pokemon1, pokemon2){
      if (pokemon1.name > pokemon2.name) {
            return 1;
          }
          if (pokemon1.name < pokemon2.name) {
            return -1;
          }
         
          return 0;
    });    
    
  },
}
 filter.photo();

export default filter;



