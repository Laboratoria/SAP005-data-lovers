export function getName(allData, nome) {
    nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();
   return allData.filter(personagem => personagem.name.startsWith(nome))
}

   

