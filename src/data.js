export const filterByType = (pokemons, tipo) => {
    if (tipo.toLowerCase() == "todos") {
        return pokemons;
    }
    return pokemons.filter((pokemon) => {
        return pokemon.type.includes(tipo.toLowerCase());
    }
    )
};

export const filterByRarity = (pokemons, rarity) => {
    if (rarity.toLowerCase() == "todos") {
        return pokemons;
    }
    return pokemons.filter((pokemons) => {
        return pokemons["pokemon-rarity"].includes(rarity.toLowerCase());
    }
    )
};