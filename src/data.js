export const filterByType = (pokemons, tipo) => {
    if (tipo.toLowerCase() == "todos") {
        return pokemons;
    }
    return pokemons.filter((pokemon) => {
        return pokemon.type.includes(tipo.toLowerCase());
    })
};

export const filterByName = (pokemons, input) => {

    return pokemons.filter((pokemon) => {
        return pokemon.name.includes(input.toLowerCase());
    })
};

export const filterByRarity = (pokemons, rarity) => {
    if (rarity.toLowerCase() == "todos") {
        return pokemons;
    }
    return pokemons.filter((pokemons) => {
        return pokemons["pokemon-rarity"].includes(rarity.toLowerCase());
    })
};

export const orderByName = (pokemons, order) => {

    let arraySorted = pokemons.sort((pokemon1, pokemon2) => {
        var nameA = pokemon1.name.toUpperCase();
        var nameB = pokemon2.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    })

    if (order == "za") {
        return arraySorted.reverse();
    }

    return arraySorted;
}

export const filterByRegiao = (arrayPokemon, regiao) => {
    return arrayPokemon.filter((pokemon) => {return pokemon.generation.name == regiao});
}

export const subtracao = (quantidade1, quantidade2) => {
    return quantidade1 - quantidade2;
}