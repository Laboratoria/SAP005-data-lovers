import { sortData, search } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

function changePage(){
    const menuHome = document.querySelector('#home');
    const menuCharactersPage = document.querySelector('#characters');
    const home = document.querySelector('#first-page');
    const charactersPage = document.querySelector('#characters-page');
    const chooseAlphabeticOrder = document.getElementById("sort-by-alphabetic-order");
    const searchButton = document.getElementById("search-button");
    const searchText = document.getElementById("search");
    
    menuCharactersPage.addEventListener('click', () => {
        pageDefinitions.page = 1;
        searchText.value = "";
        searchDefinitions.searchText = searchText.value;
        searchDefinitions.searchOrder = "empty";
        home.classList.remove('page-active');
        home.classList.add('page-disabled');
        charactersPage.classList.remove('page-disabled');
        charactersPage.classList.add('page-active');
        update.charactersPage(searchDefinitions.searchText);
        buttonsControls.createListeners();
    })

    searchButton.addEventListener("click", (event) => {
        if(home.classList.contains("page-active")){
            home.classList.remove('page-active');
            home.classList.add('page-disabled');
            charactersPage.classList.remove('page-disabled');
            charactersPage.classList.add('page-active');
        }
        event.preventDefault();
        pageDefinitions.page = 1;
        searchDefinitions.searchOrder = "empty";
        searchDefinitions.searchText = searchText.value
        update.charactersPage(searchDefinitions.searchText);
        buttonsControls.createListeners();
    });

    chooseAlphabeticOrder.addEventListener('change', (event) => {
        pageDefinitions.page = 1;
        searchDefinitions.searchText = searchText.value;
        searchDefinitions.searchOrder = event.target.value;
        update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchOrder);
        buttonsControls.createListeners();
    })

    menuHome.addEventListener('click', () => {
        searchText.value = "";
        searchDefinitions.searchText = searchText.value;
        home.classList.remove('page-disabled');
        home.classList.add('page-active');
        charactersPage.classList.remove('page-active');
        charactersPage.classList.add('page-disabled');
    })
}

const pageDefinitions = {
    page: 1,
    perPage: 9,
    totalPage: 0,
    totalItems: 0,
}

const searchDefinitions = {
    searchText: "",
    searchOrder: "empty",
}

function firstPagePrintCard(card) {
    const cards = printCard(card);
    let firstPageCards = document.getElementById("main-characters-list");
    firstPageCards.appendChild(cards);
}

function charactersPagePrintCard(card) {
    const cards = printCard(card)
    let charactersCards = document.getElementById("list");
    charactersCards.appendChild(cards);
}

function printCard(card){
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

    listItem.classList.add("item");
    return listItem;
}

const buttonsNumbers = {
    calculateMaxVisible() {
        let maxVisibleButtons = 5;
        let maxLeft = (pageDefinitions.page - Math.floor(maxVisibleButtons/2));
        let maxRight = (pageDefinitions.page + Math.floor(maxVisibleButtons/2));
        if(maxLeft<1) {
            maxLeft = 1;
            maxRight = maxVisibleButtons;
        }
        if(maxRight>pageDefinitions.totalPage) {
            maxLeft = pageDefinitions.totalPage - (maxVisibleButtons - 1);
            maxRight = pageDefinitions.totalPage;
            if(maxLeft<1){
                maxLeft = 1;
            }
        }
        return {maxLeft, maxRight};
    },
    
    update() {
        const {maxLeft, maxRight} = buttonsNumbers.calculateMaxVisible();
        document.querySelector('.numbers').innerHTML = "";
        
        for(let actualPage = maxLeft; actualPage<=maxRight; actualPage++){
            buttonsNumbers.create(actualPage);
        }
    },
    
    create(number) {
        const button = document.createElement('button');
        button.innerHTML = number;
    
        button.addEventListener('click', (event) => {
            const page = event.target.innerText;
            buttonsControls.goTo(page);
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchOrder);
            buttonsNumbers.update();
        })
        
        document.querySelector('.numbers').appendChild(button);
    }
}

const buttonsControls = {
    next() {
        pageDefinitions.page++;
        if(pageDefinitions.page > pageDefinitions.totalPage){
            pageDefinitions.page--;
        }
    },
    prev() {
        pageDefinitions.page--;
        if(pageDefinitions.page<1){
            pageDefinitions.page++;
        }
    },
    goTo(pageOnClick) {
        if(pageDefinitions.page <1){
            pageDefinitions.page=1;
        }
        pageDefinitions.page = Number(pageOnClick);
        if(pageDefinitions.page > pageDefinitions.totalPage){
            pageDefinitions.page = pageDefinitions.TotalPage;
        }
    },
    createListeners() {
        document.querySelector('.first').addEventListener('click', () => {
            buttonsControls.goTo(1);
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchOrder);
        })
        document.querySelector('.last').addEventListener('click', () => {
            buttonsControls.goTo(pageDefinitions.totalPage);
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchOrder);
        })
        document.querySelector('.next').addEventListener('click', () => {
            buttonsControls.next();
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchOrder);
        })
        document.querySelector('.prev').addEventListener('click', () => {
            buttonsControls.prev();
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchOrder);
        })
    }
}

function createItemsIndex() {
    const textItems = document.getElementById("textItems");
    const initialItem = (pageDefinitions.perPage*(pageDefinitions.page-1))+1;
    const finalItem = initialItem+9;
    if(pageDefinitions.page === 1){
        textItems.innerHTML = 1 + "-" + pageDefinitions.perPage + " de " + pageDefinitions.totalItems + " personagens";
    }else if(pageDefinitions.page === pageDefinitions.totalPage){
        textItems.innerHTML = initialItem + "-" + pageDefinitions.totalItems + " de " + pageDefinitions.totalItems + " personagens";
    }else {
        textItems.innerHTML = initialItem + "-" + finalItem + " de " + pageDefinitions.totalItems + " personagens";
    }
}

const update = {
    firstPage() {
        const firstPageItems = data.results.slice(0, 5);

        for(let eachFirstPageItem of firstPageItems){
            firstPagePrintCard(eachFirstPageItem)
        }
    },
    paginateResults(data) {
        document.getElementById("list").innerHTML = ""; 
        let paging = pageDefinitions.page - 1;
        let start = paging * pageDefinitions.perPage;
        let end = start + pageDefinitions.perPage;
        const dataSlice = data.slice(start, end)
        
        pageDefinitions.totalItems = data.length
        pageDefinitions.totalPage = Math.ceil(pageDefinitions.totalItems/pageDefinitions.perPage)

        for(let eachItem of dataSlice){
            charactersPagePrintCard(eachItem);
        }
    
        window.scrollTo(0,0);
        buttonsNumbers.update();
        createItemsIndex()
    },
    charactersPage(searchText, sortOrder = "empty") {
        let dataForPaginate = data.results.slice();
        if(searchText){
            dataForPaginate = search(dataForPaginate, "name", searchText);
        }
        if(sortOrder !== "empty"){
            sortData(dataForPaginate, "name", sortOrder);
        }
        update.paginateResults(dataForPaginate);
    },
}

function init() {
    update.firstPage();
}

init();
changePage();
