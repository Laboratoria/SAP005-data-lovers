import filter from './data.js';


const image = document.createElement("img");
image.src = filter.photo(); 
document.getElementById('cards').appendChild(image);


