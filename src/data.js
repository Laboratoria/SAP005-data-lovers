export const ordenarAaZ = (pokemonGo, filtroOrdem) => {

    if (filtroOrdem == "a-z") {

        return pokemonGo.sort(function(a, b) {

            if (a.name <= b.name) {
                return -1
            } else {
                return 1;
            }
        });
    } else {

        return pokemonGo.sort(function(a, b) {

            if (a.name <= b.name) {
                return 1;
            } else {
                return -1;
            }
        })
    }
}

export const buscarTipo = (pokemonGo, filtroTipo) => {
    return pokemonGo.filter(pokemon => pokemon.type.includes(filtroTipo));
}

export const porNome = (pokemonGo, pokeName) => {
    return pokemonGo.filter(pokemon => pokemon.name.includes(pokeName));

}

export const resultado = (pokemonGo, filtroTipo) =>
    ((filtroTipo) / (pokemonGo) * 100);