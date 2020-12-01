export const filterByType = (pokemons, tipo) => {
    if (tipo.toLowerCase() == "todos") {
        return pokemons;
    }
    return pokemons.filter((pokemon) => {
        return pokemon.type.includes(tipo.toLowerCase());
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
        var nameA = pokemon1.name.toUpperCase(); // ignore upper and lowercase
        var nameB = pokemon2.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    })

    if (order == "za") {
        return arraySorted.reverse();
    }

    return arraySorted;
}