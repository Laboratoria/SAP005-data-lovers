// // estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

// // let arr = [];
// // arr.push({"id": 1,"name": "Rick Sanchez"});
// // for(let 1=0, i<arr.length; i++) {
// //   if(arr[i].id ===1){
// //     console.log(arr)
// //   }
// //

`const tudo = [
    {
      name: "bla",
      status: "não sei",
      species: "ok",
      gender: "Female"
    },
    {
      name: "bla",
      status: "não sei",
      species: "ok",
      gender: "Male"
    },
    {
      name: "bla",
      status: "não sei",
      species: "ok",
      gender: "Male"
    },
    {
      name: "bla",
      status: "não sei",
      species: "ok",
      gender: "Male"
    },
  ]
  
  const arrayFiltrada = tudo.filter(personagem => personagem.gender === "Male")
  console.log(arrayFiltrada)
  // tudo.forEach(personagem => console.log(personagem.nome))
  
  function templateCard(arrayDados){
    let stringCards = ""
    for (personagem of arrayDados) {
      stringCards += 
      `<article class="card ${personagem.name}">
      <p>${personagem.name}</p>
      <p>${personagem.gender}</p>
      </article>`
    }
    return stringCards
  }
  
  const secaoPrincipal = document.getElementById("principal")
  secaoPrincipal.innerHTML = templateCard(arrayFiltrada)`
