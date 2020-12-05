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
        sortCondition(pokemon1, pokemon2);
    });

    if (order == "za") {
        return arraySorted.reverse();
    }

    return arraySorted;
}

export const sortCondition = (a, b) => {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}

export const filterByRegiao = (arrayPokemon, inputRegiao) => {
    return arrayPokemon.filter((pokemon) => {
        return pokemon.generation.name == inputRegiao;
    });
};


