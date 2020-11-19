import data from "./data/pokemon/pokemon.js"

const filter = {
  photo(){
    const image = data.pokemon.map(img =>{
      return {
        name: img.name,
        img: img.img
      }
    })    
    return image

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
      return order;
  },

  weaknesses() {
    const weaknesses = data.pokemon.map(pokemon => {
        return {
            name: pokemon.name,
            img: pokemon.img,
            weaknesses: pokemon.weaknesses
        }
    })
    return weaknesses
  },

  resistant() {
    const resistant = data.pokemon.map(pokemon => {
        return {
            name: pokemon.name,
            img: pokemon.img,
            resistant: pokemon.resistant
        }
    })
    return resistant
  },

}
 filter.photo();

export default filter;



