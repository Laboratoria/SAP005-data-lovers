import filter from './data.js';

const img = filter.photo()


img.forEach(pokemon => {
    const image = document.createElement("img");  
    image.src = pokemon.img
    document.getElementById('cards').appendChild(image);
    // const text = document.createElement('p');
    // text.innerHTML = pokemon.name   
    // document.getElementById('cards').appendChild(text); 
    
});



