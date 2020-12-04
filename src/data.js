/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {

  return 'OMG';
};*/

//Primeira tentativa


/*const pokemons = data.pokemon.slice(0, 102); //arrays
export const pokemons;

const buttonName = document.getElementById('btname')
buttonName.addEventListener('click', functionName)

function functionName(clickBtName){ 
  clickBtName.preventDefault();
  let pokeNome = document.getElementById('text').value;
  pokeNome = pokeNome.toUpperCase();
  let resultName = pokemons.map(function (pokemons) {
  return pokemons.name
  })
}


const buttonTipo = document.getElementById('pokeTipos')
buttonTipo.addEventListener('click', functionType)  

function functionType(clickType){
  clickType.preventDefault(); 
  let select = document.getElementById('pokeTipos');
  let option = select.options[select.selectedIndex];
  document.getElementById('tipos').value = option.tipos;
  let typeWater = pokemons.filter(pokemons => {
    pokemons.type.includes("water")
    return typeWater
  )}*/

  export const selectType = (selectByType, data) =>{
    return data.filter((select) => select.type.includes(selectByType));
  };



