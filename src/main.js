import {applySearchType, applySearchName, resultCalcType} from './data.js';

import data from './data/pokemon/pokemon.js';

const pokemon = data.pokemon;
const card = document.getElementById ("card");

function allList (list) {
    document.getElementById ("card").innerHTML="";
    for (let obj of list) {

        let card= document.createElement ("div");
        card.className= "div-child";

       card.innerHTML = img src ="img-pokemon"; class ="img-pokemon";
        // <h4>${obj.num}</h4>;
        // {/* <h3>$ {obj.name.replace ("(Female)', "").replace("(Male)","")}</h3> */}
        // <p> Tipo: ${obj.type.join(",")}</p>;
        // card.appenChild (card);
    }

}
allList (pokemon);

document.getElementById("select-type").onchange = () => {
    const filterType = document.getElementById("select-type").value;
    const listType = (applySearchType(pokemon, filterType));
    const filterCalcType = (resultCalcType(pokemon.length, filterType.length).toFixed(2));
    allList(listType);
}

document.getElementById("filter-name").onkeyup = () => {
    const filterName = document.getElementById("filter-name").value;
    const newList = (applySearchName(pokemon, filterName))
    allList(newList);
}


console.log(example, data);
