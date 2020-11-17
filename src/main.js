import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


for(let result of data.results){
    printCard(result);
} 

function printCard(card){
    let cards = document.getElementById("card");
    let listItem = document.createElement("li");
    
    let image = new Image(200,200);
    image.src = card.image;
    listItem.appendChild(image);

    for(let [key, value] of Object.entries(card)){
        if(key === "name"){
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode(value));
            listItem.appendChild(paragraph);
            paragraph.id = "name";
        }else if(key === "status"){
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode("Status: "+value));
            listItem.appendChild(paragraph);
            paragraph.id = "status";
        }else if(key === "species"){
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode(value));
            listItem.appendChild(paragraph);
            paragraph.id = "species";
        }else if(key === "gender"){
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode("Gender: "+value));
            listItem.appendChild(paragraph);
            paragraph.id = "gender";
        }else if(key === "type" && value !== ""){
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode("Type: "+value));
            listItem.appendChild(paragraph);
            paragraph.id = "type";
        }else if(key === "origin"){
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode("Origin: "+value.name));
            listItem.appendChild(paragraph);
            paragraph.id = "origin";
        }else if(key === "location"){
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode("Last location: "+value.name));
            listItem.appendChild(paragraph);
            paragraph.id = "location";
        }else if(key === "episode"){
            let paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode("Number of episodes in wich it appears: "+value.length));
            listItem.appendChild(paragraph);
            paragraph.id = "number-episodes";
        }
    }

    let firstEpisodeAppeared;

    fetch(card.episode[0])
        .then(response => response.json())
        .then(function(data){
            let nameFirstEpisode = document.createElement("p");
            firstEpisodeAppeared = data.name
            nameFirstEpisode.appendChild(document.createTextNode("First (or only) episode in wich it appears: "+data.name));
            listItem.appendChild(nameFirstEpisode);
        })
    
    fetch(card.episode[card.episode.length-1])
        .then(response => response.json())
        .then(function(data){
            if(data.name !== firstEpisodeAppeared){
                let nameLastEpisode = document.createElement("p");
                nameLastEpisode.appendChild(document.createTextNode("Last episode in wich it appears: "+data.name));
                listItem.appendChild(nameLastEpisode);
            }
        })

    
    cards.appendChild(listItem);
}

