export function getType(sel, evento) {
    let pokemonType = sel.filter(element => {
        for (let i = 0; i < element.type.length; i++) {
            if (element.type[i] === evento) {
                return element
            }
        }
    })
    return pokemonType
}



export function getName(pokemons, event) {
    let pokemon = pokemons.filter(element => {
        return element.name.includes(event);

    })
    return pokemon

}

export function getEvolution(pokemons, name) {
    let pokemon = pokemons.find(element => {
        return element.name.includes(name);
    })
    let pokemon_evolutions = [];
    pokemon.next_evolution.forEach(element => {
        let evolution_name = element.name;
        let pokemon_evolution = pokemons.find(element => {
            return element.name.includes(evolution_name);
        })
        pokemon_evolutions.push(pokemon_evolution);
    });
    return pokemon_evolutions;

}