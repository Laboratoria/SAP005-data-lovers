export const instantSearch = (searchName, dataJson) => {
    return dataJson.filter(object => object.name.startsWith(searchName))
}

export const selectPokemonType = (selectType, dataJson) => {
    return dataJson.filter(pokemon => pokemon.type.includes(selectType))
}

export const selectPokemonResistant = (selectResistant, dataJson) => {
    return dataJson.filter(pokemon => pokemon.resistant.includes(selectResistant))
}

export const selectPokemonWeaknesses = (selectWeaknesses, dataJson) => {
    return dataJson.filter(pokemon => pokemon.weaknesses.includes(selectWeaknesses))
}

export const selectPokemonGeneration = (selectGeneration, dataJson) => {
    return dataJson.filter(pokemon => pokemon.generation.name === selectGeneration)
}

export const orderPokemonName = (orderName, dataJson) =>{
    return dataJson.sort(function(a, b) {
         const keyA = a.name,
               keyB = b.name
         // Compare the 2 dates
         if (orderName === "a_z"){
             if (keyA < keyB) return -1
             if (keyA > keyB) return 1
         }else {
             if (keyA < keyB) return 1
             if (keyA > keyB) return -1
         }

    })
}

export const orderPokeNumber = (orderNum, dataJson) =>{
    return dataJson.sort(function(a1, b2) {
         const keyA1 = a1.num,
               keyB2 = b2.num
         // Compare the 2 dates
         if (orderNum === "1_251"){
             if (keyA1 < keyB2) return -1
             if (keyA1 > keyB2) return 1
         }else {
             if (keyA1 < keyB2) return 1
             if (keyA1 > keyB2) return -1
         }
         return 0
    })
}