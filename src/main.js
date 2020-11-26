import { sortData, search, filter } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

const html = {
    menuHomeButton: document.getElementById("home"),
    menuCharactersPageButton: document.getElementById("characters"),
    home: document.getElementById("first-page"),
    homeByLogoImage: document.getElementById("logo-image-button"),
    charactersPage: document.getElementById("characters-page"),
    chooseAlphabeticOrder: document.getElementById("sort-by-alphabetic-order"),
    optionEmptyOnSortOrder: document.getElementById("empty"),
    searchButton: document.getElementById("search-button"),
    searchText: document.getElementById("search"),
    menuHamburguer: document.getElementById("hamburguer"),
    menuHamburguerItems: document.getElementById("menu-container"),
    filterButton: document.getElementById("filter-button"),
    filterOptions: document.getElementById("filter-options"),
    homePageCharactersList: document.getElementById("main-characters-list"),
    charactersList: document.getElementById("list"),
    paginateNumbers: document.querySelector(".numbers"),
    paginateFirstPageButton: document.querySelector(".first"),
    paginateLastPageButton: document.querySelector(".last"),
    paginateNextPageButton: document.querySelector(".next"),
    paginatePreviousPageButton: document.querySelector(".prev"),
    textItemsIndex: document.getElementById("textItems"),
    filterCheckbox: document.querySelectorAll('input[name="filter-option"]'),
    filterValuesButton: document.getElementById("filter-options-button"),
};

const loadHomePage = () => {
    html.searchText.value = "";
    searchDefinitions.searchText = html.searchText.value;
    uncheckFilters();
    searchDefinitions.searchFilter = "";
    html.filterOptions.classList.remove("show");
    html.home.classList.remove("page-disabled");
    html.home.classList.add("page-active");
    html.charactersPage.classList.remove("page-active");
    html.charactersPage.classList.add("page-disabled");
    html.menuHamburguerItems.classList.toggle("show");
};

const uncheckFilters = (checked = false) => {
    const allFilterItems = html.filterCheckbox;
    allFilterItems.forEach((filterItem) => {
        filterItem.checked = checked;
    });
};

const checkedFilters = (filterCategory) => {
    let filterValues = [];
    for(let i = 0; i < filterCategory.length; i++){
        if(filterCategory[i].checked){
            filterValues.push(filterCategory[i].value);
        }
    };
    return filterValues;
};

function changePage(){
    html.menuHamburguer.addEventListener("click", () => {
        html.menuHamburguerItems.classList.toggle("show");
    });

    html.filterButton.addEventListener("click", () => {
        html.filterOptions.classList.toggle("show");
    });
    
    html.menuCharactersPageButton.addEventListener("click", () => {
        pageDefinitions.page = 1;
        html.searchText.value = "";
        searchDefinitions.searchText = html.searchText.value;
        searchDefinitions.searchOrder = "empty";
        html.home.classList.remove("page-active");
        html.home.classList.add("page-disabled");
        html.charactersPage.classList.remove("page-disabled");
        html.charactersPage.classList.add("page-active");
        update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter);
        buttonsControls.createListeners();
        html.menuHamburguerItems.classList.toggle("show");
    });

    html.filterValuesButton.addEventListener("click", (event) => {
        event.preventDefault();
        pageDefinitions.page = 1;
        searchDefinitions.searchOrder = "empty";
        searchDefinitions.searchFilter = checkedFilters(html.filterCheckbox);
        update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter);
        buttonsControls.createListeners();
    });

    html.searchButton.addEventListener("click", (event) => {
        if(html.home.classList.contains("page-active")){
            html.home.classList.remove('page-active');
            html.home.classList.add('page-disabled');
            html.charactersPage.classList.remove('page-disabled');
            html.charactersPage.classList.add('page-active');
        }
        event.preventDefault();
        pageDefinitions.page = 1;
        searchDefinitions.searchOrder = "empty";
        searchDefinitions.searchText = html.searchText.value;
        uncheckFilters();
        searchDefinitions.searchFilter = "";
        html.filterOptions.classList.remove("show");
        update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter);
        buttonsControls.createListeners();
    });

    
    html.chooseAlphabeticOrder.addEventListener("change", (event) => {
        pageDefinitions.page = 1;
        searchDefinitions.searchText = html.searchText.value;
        searchDefinitions.searchOrder = event.target.value;
        update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
        buttonsControls.createListeners();
    });

    html.menuHomeButton.addEventListener("click", loadHomePage);

    html.homeByLogoImage.addEventListener("click", loadHomePage);
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
    searchFilter: "",
}

function firstPagePrintCard(card) {
    const cards = printCard(card);
    let firstPageCards = html.homePageCharactersList;
    firstPageCards.appendChild(cards);
}

function charactersPagePrintCard(card) {
    const cards = printCard(card)
    let charactersCards = html.charactersList;
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
        html.paginateNumbers.innerHTML = "";
        
        for(let actualPage = maxLeft; actualPage<=maxRight; actualPage++){
            buttonsNumbers.create(actualPage);
        }
    },
    
    create(number) {
        const button = document.createElement("button");
        button.innerHTML = number;
    
        button.addEventListener("click", (event) => {
            const page = event.target.innerText;
            buttonsControls.goTo(page);
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
            buttonsNumbers.update();
        })
        
        html.paginateNumbers.appendChild(button);
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
        html.paginateFirstPageButton.addEventListener("click", () => {
            buttonsControls.goTo(1);
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
        })
        html.paginateLastPageButton.addEventListener("click", () => {
            buttonsControls.goTo(pageDefinitions.totalPage);
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
        })
        html.paginateNextPageButton.addEventListener("click", () => {
            buttonsControls.next();
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
        })
        html.paginatePreviousPageButton.addEventListener("click", () => {
            buttonsControls.prev();
            update.charactersPage(searchDefinitions.searchText, searchDefinitions.searchFilter, searchDefinitions.searchOrder);
        })
    }
}

function createItemsIndex() {
    const textItems = html.textItemsIndex;
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
        html.charactersList.innerHTML = ""; 
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
    charactersPage(searchText, searchFilter, sortOrder = "empty") {
        let dataForPaginate = data.results.slice();
        let filterData = [];
        let dataSpeciesFilter = [];
        let dataStatusFilter = [];
        let dataGenderFilter = [];
        
        if(searchText){
            dataForPaginate = search(dataForPaginate, "name", searchText);
        }
        if(searchFilter){
            for(let eachSearchFilter of searchFilter){
                if(eachSearchFilter === "human" || eachSearchFilter === "alien" || eachSearchFilter === "unknown"){
                    dataSpeciesFilter = dataSpeciesFilter.concat(filter(dataForPaginate, "species", eachSearchFilter));
                    filterData = dataSpeciesFilter;
                }
                if(eachSearchFilter === "alive" || eachSearchFilter === "dead" || eachSearchFilter === "unknown-status"){
                    if(filterData.length !== 0 && dataStatusFilter.length === 0){
                        dataForPaginate = filterData;
                    }
                    (eachSearchFilter === "unknown-status") ? 
                    dataStatusFilter = dataStatusFilter.concat(filter(dataForPaginate, "status", "unknown")) :
                    dataStatusFilter = dataStatusFilter.concat(filter(dataForPaginate, "status", eachSearchFilter));
                    filterData = dataStatusFilter;
                }
                if(eachSearchFilter === "female" || eachSearchFilter === "male" || eachSearchFilter === "genderless" || eachSearchFilter === "unknown-gender"){
                    if(filterData.length !== 0 && dataGenderFilter.length === 0){
                        dataForPaginate = filterData;
                    }
                    (eachSearchFilter === "unknown-gender") ?
                    dataGenderFilter = dataGenderFilter.concat(filter(dataForPaginate, "gender", "unknown")) :
                    dataGenderFilter = dataGenderFilter.concat(filter(dataForPaginate, "gender", eachSearchFilter));
                    filterData = dataGenderFilter;
                }
            }
            dataForPaginate = filterData
        }
        if(sortOrder !== "empty"){
            sortData(dataForPaginate, "name", sortOrder);
        }else{
            sortData(dataForPaginate, "id", "asc");
        }
        update.paginateResults(dataForPaginate);
    },
}

function init() {
    update.firstPage();
}

init();
changePage();