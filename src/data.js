import data from "./data/pokemon/pokemon.js"

const filter = {
  photo(){
    const image = data.pokemon.map(img =>{
      return {
        name: img.name,
        img: img.img,
        num:img.num,
        height: img.size.height,
        weight: img.size.weight,
        type:img.type,
        weaknesses: img.weaknesses,
        egg: img.egg
      }
    })    
    return image

  },
  
  filter(){
    const orderName = data.pokemon.map(item => {
      
      return {
        name: item.name,
        img: item.img,
        num:item.num
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
  type(){
    const element = data.pokemon.map(typeElement =>{
      return{
        name:typeElement.name,
        img:typeElement.img,
        type:typeElement.type,
        num:typeElement.num,
        stats:parseInt(typeElement.stats['base-attack'])
      }
    })
        return element
  },

  weaknesses() {
    const weaknesses = data.pokemon.map(pokemon => {
        return {
            name: pokemon.name,
            img: pokemon.img,
            weaknesses: pokemon.weaknesses,
            num:pokemon.num
        }
    })
    return weaknesses
  },

  resistant() {
    const resistant = data.pokemon.map(pokemon => {
        return {
            name: pokemon.name,
            img: pokemon.img,
            resistant: pokemon.resistant,
            num:pokemon.num
        }
    })
    return resistant
  },

  pokedexFilter() {
    const pokedex = data.pokemon.map(pokemon => {
        return {
            name: pokemon.name,
            img: pokemon.img,
            num: pokemon.num
        } 
        console.log(pokedex)
    })
    const orderNum = pokedex.sort(function (num1 ,num2 ){
      if (pokedex.num > pokedex.num) {
            return 1;
          }
          if (num1.num < num2.num) {
            return -1;
          }
         
          return 0;
    });    
      return orderNum
  }

}

 filter.photo();

export default filter;



