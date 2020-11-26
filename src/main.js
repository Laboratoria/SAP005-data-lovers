import data from './data/pokemon/pokemon.js';
for (const [i, pokemon] of data.pokemon.entries()) {
  const img = document.createElement('img');
  img.src = pokemon.img;
 
  let cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  
  const card = document.createElement('div');
  card.classList.add('card');

  let orderedList = document.createElement('ol');
  orderedList.classList.add('list-body');
  
  let listInfo1 = document.createElement('li');
  listInfo1.classList.add('name');
  listInfo1.innerHTML = pokemon.name;

  let listInfo2 = document.createElement('li');
  listInfo2.classList.add('num');
  listInfo2.innerHTML = pokemon.num;

  let listInfo3 = document.createElement('li');
  listInfo3.classList.add('type');
  listInfo3.innerHTML = pokemon.type;

  const button = document.createElement('button');
  button.classList.add('poke-info');
  button.innerHTML = 'Poke Info';
  button.addEventListener('click', function (){
    goToPokedex(i);
  })

  card.appendChild(img);
  card.appendChild(cardBody);
  cardBody.appendChild(orderedList);
  cardBody.appendChild(button);
  orderedList.appendChild(listInfo1).appendChild(listInfo2).appendChild(listInfo3);
  document.getElementById('root').appendChild(card);
}

function goToPokedex(index) {
  window.location.href = "/pokedex?pokeId=" + index;
}