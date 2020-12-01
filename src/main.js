import { example } from './data.js';

import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

/* -------------MENU E BOTÕES DESKTOP VERSION------------ */ 



/* -------Mostrando personagens--------- */

const charactersButton = document.getElementById("characters-button")
charactersButton.addEventListener("click", showCharacters)



function showCharacters(){
  test.style.display = "none"

	for (let character of data.results){
		let cards = document.getElementById("get-cards");
        let newCard = document.createElement("div");
		cards.appendChild(newCard);
        newCard.innerHTML = `<div class="all-cards">
        <div class="card-info">
         <div class="card-front"><img class="front-pic" src="${character.image}" alt=""><h1>${character.name}</h1></div>
            <div class="card-back">
            <img class="back-pic" src="${character.image}" alt="">
            <ul>
            <li>Name: ${character.name}</li>
            <li>Status: ${character.status}</li>
            <li>Species: ${character.species}</li> 
            <li>Type: ${character.type}</li>
            <li>Gender: ${character.gender}</li> 
            <li>Origin: ${character.origin.name}</li>
            <li>Location: ${character.location.name}</li>
            </ul>
            </div>
          </div>  
        </div>`;
	}
}






/* -----------TESTE------------ */

let totalCharac = 0
let characList = { 
     
  "allList" : [{
               "rickSanchez": 0 ,  "evilMorty" : 0 , "zeepXanflorp": 0 ,
               "bethEspacial" : 0 , "mrPoopyButthole" : 0 , "mrMeeseeks" : 0 ,
               "mortySmith" : 0 , "summerSmith" : 0 , "jerrySmith" : 0 ,
               "tinyRick" : 0
              }
            ]
          }

          const resultButton = document.getElementById("result-button")
          resultButton.addEventListener("click", score)
          
          const testButton = document.getElementById("test-button")
          const confirmButton = document.getElementById("next-button")
          const test = document.getElementById("questions-area")
          
          
          confirmButton.addEventListener("click", nextQuestion)
          testButton.addEventListener("click", showTest)

     function showTest() {

/* Paginação do teste */          
    
         test.style.display = "block"
  
             hiding();
  
         document.getElementById("question1").style.display = "block";
         document.getElementById("current-question").value = 1
       }
  
    function hiding(){
      
         for(let i = 1; i <= 10; i++){

         document.getElementById("question" + i).style.display = "none";
      }
    }


    function nextQuestion(){
      const questions = 10

      let current = document.getElementById("current-question").value
        if (current >= 1 && current < questions){
           hiding()
         document.getElementById("current-question").value++
         document.getElementById("question" +  document.getElementById("current-question").value).style.display = "block"
        }
     }


/* Acumulando pontos */

     function score() {
       for(let indice of characList.allList){
      if(document.querySelector("input[name = 'choose-box1']:checked")){
        if (document.querySelector("input[name = 'choose-box1']:checked").value == "1"){
              indice.rickSanchez += 1
              indice.zeepXanflorp += 1
              indice.evilMorty += 1
              indice.bethEspacial += 1
              totalCharac += 4
        }
     }

     if(document.querySelector("input[name = 'choose-box1']:checked")){
       if (document.querySelector("input[name = 'choose-box1']:checked").value == "2"){
             indice.mrPoopyButthole += 2
             indice.mrMeeseeks += 1
             indice.tinyRick += 2
             totalCharac += 5
        } 
     }

     if(document.querySelector("input[name = 'choose-box1']:checked")){
       if (document.querySelector("input[name = 'choose-box1']:checked").value == "3"){
            indice.mortySmith += 1
            indice.summerSmith += 1
            indice.jerrySmith += 1
            totalCharac += 3
        } 
      }

      if(document.querySelector("input[name = 'choose-box2']:checked")){
        if (document.querySelector("input[name = 'choose-box2']:checked").value == "4"){
            indice.rickSanchez += 2
            indice.zeepXanflorp  += 1
            indice.evilMorty += 1
            totalCharac += 4
         } 
       }

       if(document.querySelector("input[name = 'choose-box2']:checked")){
        if (document.querySelector("input[name = 'choose-box2']:checked").value == "5"){
            indice.bethEspacial += 1
            indice.mrPoopyButthole += 2
            indice.mrMeeseeks += 1
            indice.tinyRick += 2
            totalCharac += 6
         } 
       }

       if(document.querySelector("input[name = 'choose-box2']:checked")){
        if (document.querySelector("input[name = 'choose-box2']:checked").value == "6"){
            indice.mortySmith += 1
            indice.summerSmith += 1
            indice.jerrySmith += 1
            totalCharac += 3
         } 
       }

       if(document.querySelector("input[name = 'choose-box3']:checked")){
        if (document.querySelector("input[name = 'choose-box3']:checked").value == "7"){
             indice.rickSanchez += 1
             indice.evilMorty += 1
             indice.zeepXanflorp+= 1
             indice.bethEspacial += 1
             totalCharac += 4
         } 
       }

       if(document.querySelector("input[name = 'choose-box3']:checked")){
        if (document.querySelector("input[name = 'choose-box3']:checked").value == "8"){
            indice.summerSmith += 2
            totalCharac += 2
         } 
       }       

       if(document.querySelector("input[name = 'choose-box3']:checked")){
        if (document.querySelector("input[name = 'choose-box3']:checked").value == "9"){
            indice.mrMeeseeks += 1
            indice.mrPoopyButthole += 1
            indice.mortySmith += 1
            indice.jerrySmith += 1
            indice.tinyRick += 1
            totalCharac += 5
         } 
       }  

       if(document.querySelector("input[name = 'choose-box4']:checked")){
        if (document.querySelector("input[name = 'choose-box4']:checked").value == "10"){
            indice.evilMorty += 2
            indice.zeepXanflorp += 1
            totalCharac += 3
         } 
       } 
       
       if(document.querySelector("input[name = 'choose-box4']:checked")){
        if (document.querySelector("input[name = 'choose-box4']:checked").value == "11"){
            indice.rickSanchez += 1
            indice.bethEspacial += 1
            indice.mrPoopyButthole += 1
            indice.mortySmith += 1
            indice.tinyRick += 1
            totalCharac += 5
         } 
       }

       if(document.querySelector("input[name = 'choose-box4']:checked")){
        if (document.querySelector("input[name = 'choose-box4']:checked").value == "12"){
            indice.summerSmith += 2
            totalCharac += 2
         } 
       }

       if(document.querySelector("input[name = 'choose-box5']:checked")){
        if (document.querySelector("input[name = 'choose-box5']:checked").value == "13"){
            indice.evilMorty += 2
            indice.zeepXanflorp += 2
            totalCharac += 4
         } 
       }  
       
       if(document.querySelector("input[name = 'choose-box5']:checked")){
        if (document.querySelector("input[name = 'choose-box5']:checked").value == "14"){
            indice.bethEspacial += 1
            indice.mrPoopyButthole += 1
            indice.tinyRick += 1
            totalCharac += 3
         } 
       }

       if(document.querySelector("input[name = 'choose-box5']:checked")){
        if (document.querySelector("input[name = 'choose-box5']:checked").value == "15"){
            indice.rickSanchez += 1
            indice.mortySmith += 1
            indice.jerrySmith += 1
            totalCharac += 3
         } 
       }

       if(document.querySelector("input[name = 'choose-box6']:checked")){
        if (document.querySelector("input[name = 'choose-box6']:checked").value == "16"){
            indice.rickSanchez += 1
            indice.evilMorty += 1
            indice.bethEspacial += 1
            totalCharac += 3
         } 
       }

       if(document.querySelector("input[name = 'choose-box6']:checked")){
        if (document.querySelector("input[name = 'choose-box6']:checked").value == "17"){
            indice.mrMeeseeks += 2
            totalCharac += 2
         } 
       }

       if(document.querySelector("input[name = 'choose-box6']:checked")){
        if (document.querySelector("input[name = 'choose-box6']:checked").value == "18"){
            indice.mortySmith += 1
            indice.summerSmith += 1
            indice.jerrySmith += 1
            indice.zeepXanflorp  += 2
            totalCharac += 5
         } 
       }

       if(document.querySelector("input[name = 'choose-box7']:checked")){
        if (document.querySelector("input[name = 'choose-box7']:checked").value == "19"){
            indice.rickSanchez += 1
            indice.bethEspacial += 1
            indice.mrPoopyButthole += 1   
            totalCharac += 3
         } 
       }

       if(document.querySelector("input[name = 'choose-box7']:checked")){
        if (document.querySelector("input[name = 'choose-box7']:checked").value == "20"){
            indice.mrMeeseeks += 2
            indice.tinyRick += 1
            totalCharac += 3
         } 
       }

       if(document.querySelector("input[name = 'choose-box7']:checked")){
        if (document.querySelector("input[name = 'choose-box7']:checked").value == "21"){
            indice.mortySmith += 1
            indice.summerSmith += 1
            indice.jerrySmith += 1
            totalCharac += 3
        }
      }
       if(document.querySelector("input[name = 'choose-box8']:checked")){
        if (document.querySelector("input[name = 'choose-box8']:checked").value == "22"){
            indice.bethEspacial += 2
            totalCharac += 2
         } 
       }

       if(document.querySelector("input[name = 'choose-box8']:checked")){
        if (document.querySelector("input[name = 'choose-box8']:checked").value == "23"){
            indice.jerrySmith += 2
            totalCharac += 2
         } 
       }

       if(document.querySelector("input[name = 'choose-box8']:checked")){
        if (document.querySelector("input[name = 'choose-box8']:checked").value == "24"){
            indice.mortySmith += 2
            totalCharac += 2
         } 
       }

       if(document.querySelector("input[name = 'choose-box9']:checked")){
        if (document.querySelector("input[name = 'choose-box9']:checked").value == "25"){
            indice.mrMeeseeks += 2
            totalCharac += 2
         } 
       }

       if(document.querySelector("input[name = 'choose-box9']:checked")){
        if (document.querySelector("input[name = 'choose-box9']:checked").value == "26"){
            indice.rickSanchez += 2
            totalCharac += 2
         } 
       }

       if(document.querySelector("input[name = 'choose-box9']:checked")){
        if (document.querySelector("input[name = 'choose-box9']:checked").value == "27"){
            indice.evilMorty += 2
            indice.zeepXanflorp += 2 
            totalCharac += 4
         } 
       }
       console.log("Rick: " + indice.rickSanchez, "Evil Morty: " + indice.evilMorty, "Zeep: " + indice.zeepXanflorp
      ,"Beth Espacial: " + indice.bethEspacial,"Sr. Meeseeks: " + indice.mrMeeseeks, "Sr.Bunda Cagada: " + indice.mrPoopyButthole, "Tiny Rick: " + indice.tinyRick, "Morty: " + indice.mortySmith, "Jerry: " + indice.jerrySmith, "summer: " + indice.summerSmith)
    }
   }

   /* Mostrando o resultado */
   
   const testResult = document.getElementById("result-button")
   testResult.addEventListener("click", showResult)

   function showResult(){

      const picResult = document.getElementById("pics-result")
      const menuResult = document.getElementById("result-test")
      menuResult.style.display = "inline-block"
      confirmButton.style.display = "none"
      testResult.style.display = "none"


      for(let i of characList.allList){
      if(i.rickSanchez > i.evilMorty && i.rickSanchez > i.zeepXanflorp && i.rickSanchez > i.bethEspacial && i.rickSanchez > i.mrPoopyButthole && i.rickSanchez > i.mrMeeseeks && i.rickSanchez > i.mortySmith && i.rickSanchez > i.jerrySmith && i.rickSanchez > i.summerSmith){
        menuResult.innerHTML = "Rick Sanchez <br><br> Principais características: Inteligência e egoísmo <br><br> Rick é extremamente inteligente, na juventude foi um aventureiro das galáxias, mas atualmente ele só quer viver em paz e usar sua inteligência criando coisas para seu próprio benefício.  Embora goste de aventuras de alto risco, acha uma bobagem arriscar a própria vida para ajudar alguém ou algum planeta que não seja do seu interesse."
         picResult.src = "./teste-personalidadeRM/img-test/rick.jpg"         
        }
        
      
      if(i.zeepXanflorp > i.evilMorty && i.zeepXanflorp > i.rickSanchez && i.zeepXanflorp > i.bethEspacial && i.zeepXanflorp > i.mrPoopyButthole && i.zeepXanflorp > i.mrMeeseeks && i.zeepXanflorp > i.mortySmith && i.zeepXanflorp > i.jerrySmith && i.zeepXanflorp > i.summerSmith && i.zeepXanflorp > i.tinyRick){
        menuResult.innerHTML = "Zeep Xanflorp <br><br> Principais caracteristicas: Inteligência e egoísmo <br><br> Zeep tem exatamente o mesmo perfil de Rick Sanchez, a diferença está no fato do cientista do microverso( universo criado por Rick para gerar energia para a bateria da sua nave) não ter conhecimento do mundo exterior. Isso o limita a usar sua inteligência para criar coisas que o torne importante."
        picResult.src = "./teste-personalidadeRM/img-test/zeep.jpg"
       }

        if(i.evilMorty > i.rickSanchez && i.evilMorty > i.zeepXanflorp && i.evilMorty > i.bethEspacial && i.evilMorty > i.mrPoopyButthole && i.evilMorty > i.mrMeeseeks && i.evilMorty > i.mortySmith && i.evilMorty > i.jerrySmith && i.evilMorty > i.summerSmith && i.evilMorty > i.tinyRick){
          menuResult.innerHTML = "Evil Morty <br><br> Principais características: Disruptivo e sanguinário <br><br> Evil Morty é uma versão Morty que ganhou a presidência na Cidadela por propor a igualdade entre Ricks e Mortys. Embora ele seja totalmente fora da curva para um Morty padrão, ele usa seu discurso para o mal e tenta alcançar seu objetos usando violência. "
          picResult.src = "./teste-personalidadeRM/img-test/evil-morty.png"
        }
    
        if(i.bethEspacial > i.evilMorty && i.bethEspacial > i.zeepXanflorp && i.bethEspacial > i.rickSanchez && i.bethEspacial > i.mrPoopyButthole && i.bethEspacial > i.mrMeeseeks && i.bethEspacial > i.mortySmith && i.bethEspacial > i.jerrySmith && i.bethEspacial > i.summerSmith && i.bethEspacial > i.tinyRick){
          menuResult.innerHTML = "Beth Espacial <br><br> Principais características: Coragem e indiferença <br><br> Beth Espacial é a verdadeira filha (ou não) de Rick. Ela abandonou tudo para viver aventuras nas dimensões, acha a vida na Terra entendiante e segue a linha 'Rick Jovem', empenhada em missões e lutando contra o mal."
          picResult.src = "./teste-personalidadeRM/img-test/beth.png"
        }

        if(i.mrMeeseeks > i.evilMorty && i.mrMeeseeks > i.zeepXanflorp && i.mrMeeseeks > i.bethEspacial && i.mrMeeseeks > i.mrPoopyButthole && i.mrMeeseeks > i.rickSanchez && i.mrMeeseeks > i.mortySmith && i.mrMeeseeks > i.jerrySmith && i.mrMeeseeks > i.summerSmith && i.mrMeeseeks > i.tinyRick){
          menuResult.innerHTML = "Sr.Meeseeks <br><br> Principais Características: Determinação e Autodestruição <br><br> Sr. Meeseeks é uma criatura rara que vive dentro de uma caixa de desejos. Seu único objetivo é realizar o desejo de quem acionou a caixa para finalmente morrer. A morte faz parte do seu ciclo natural e ele não só a enxerga de uma forma positiva, como a busca incessantemente. Viver por muito tempo o incomoda e o que ele mais deseja é concluir logo seu objetivo."
          picResult.src = "./teste-personalidadeRM/img-test/mr-meeseeks.jpg"
        }
        
        if(i.mrPoopyButthole > i.evilMorty && i.mrPoopyButthole > i.zeepXanflorp && i.mrPoopyButthole > i.bethEspacial && i.mrPoopyButthole > i.rickSanchez && i.mrPoopyButthole > i.mrMeeseeks && i.mrPoopyButthole > i.mortySmith && i.mrPoopyButthole > i.jerrySmith && i.mrPoopyButthole > i.summerSmith && i.mrPoopyButthole > i.tinyRick){
          menuResult.innerHTML = "Sr.Bunda Cagada <br><br> Principais Características: Determinação e Lealdade <br><br> Sr. Bunda Cagada é um superstar em sua dimensão de origem, se refugiou com os Smiths para tentar viver uma vida normal. Gosta de deixar as pessoas a sua volta felizes. É um personagem que engana pela aparência, embora seja fofinho e amigável, este baixinho tem uma força incrível. Ele adora aventuras e está sempre disposto a ajudar seus amigos."
          picResult.src = "./teste-personalidadeRM/img-test/poopybuthole.jpg"
        }

        if(i.mortySmith > i.evilMorty && i.mortySmith > i.zeepXanflorp && i.mortySmith > i.bethEspacial && i.mortySmith > i.mrPoopyButthole && i.mortySmith > i.mrMeeseeks && i.mortySmith > i.rickSanchez && i.mortySmith > i.jerrySmith && i.mortySmith > i.summerSmith && i.mortySmith > i.tinyRick){
          menuResult.innerHTML = "Morty Smith <br><br> Principais características: Generosidade e Insegurança <br><br> Morty Smith é o neto de Rick. Apesar de não ter a mesma inteligência do avô, Morty colabora dedicadamente em alguma tarefa que lhe foi dada. Ao contrário de seu avô, ele é muito generoso e sempre está disposto a ajudar. Se apaixona fácil e tende a seguir mais o coração que a razão."
          picResult.src = "./teste-personalidadeRM/img-test/morty.jpeg"
        }

        if(i.jerrySmith > i.evilMorty && i.jerrySmith > i.zeepXanflorp && i.jerrySmith > i.bethEspacial && i.jerrySmith > i.mrPoopyButthole && i.jerrySmith > i.mrMeeseeks && i.jerrySmith > i.rickSanchez && i.jerrySmith > i.mortySmith && i.jerrySmith > i.summerSmith && i.jerrySmith > i.tinyRick){
          menuResult.innerHTML = "Jerry Smith <br><br> Principais características: Narcisismo e Insegurança <br><br> Jerry Smith é o genro de Rick. Ele faz questão de cuidar da família e sempre se posiciona quando Rick ameaça sua posição como patriarca. Quer ter um bom emprego e ser bem sucedido. Tenta anular sua insegurança com um excesso de confiança, porém desiste fácil dos objetivos quando estes o estressam muito. Embora seja evidênciado na série que sua inteligência não é uma das melhores, isso o faz ver o mundo com mais positividade e, consequentemente, ser mais feliz."
          picResult.src = "./teste-personalidadeRM/img-test/jerry.jpg"
        }

        if(i.summerSmith > i.evilMorty && i.summerSmith > i.zeepXanflorp && i.summerSmith > i.bethEspacial && i.summerSmith > i.mrPoopyButthole && i.summerSmith > i.mrMeeseeks && i.summerSmith > i.rickSanchez && i.summerSmith > i.jerrySmith && i.summerSmith > i.mortySmith && i.summerSmith > i.tinyRick){
          menuResult.innerHTML = "Summer Smith <br><br> Principais características: Vaidade e Narcisismo <br><br> Summer Smith é a neta mais velha de Rick. É a típica adolescente americana, busca a popularidade e adora as redes sociais. Apesar do esteriótipo, Summer é mais corajosa que Morty e consegue ser mais racional em situações de estresse comparada ao irmão caçula."
          picResult.src = "./teste-personalidadeRM/img-test/summer.jpg"
        }

        if(i.tinyRick > i.evilMorty && i.tinyRick > i.zeepXanflorp && i.tinyRick > i.bethEspacial && i.tinyRick > i.mrPoopyButthole && i.tinyRick > i.mrMeeseeks && i.tinyRick > i.rickSanchez && i.tinyRick > i.jerrySmith && i.tinyRick > i.mortySmith && i.tinyRick > i.summerSmith){
          menuResult.innerHTML = "Tiny Rick <br><br> Principais características: Determinação e Autodestruição <br><br> Tiny Rick é um clone jovem de Rick, usado para conseguir ingressar no colégio dos netos e ajudá-los com uma missão. Tiny Rick tem as mesmas características de Rick, sendo que por ser mais jovem ele é mais positivo e autroísta. Contudo sua consciência ainda tem resquícios do velho Rick, o que faz ele ter pensamentos autodestrutivos eventualmente."
          picResult.src = "./teste-personalidadeRM/img-test/tiny-rick.jpg"
        }
      
        }
    }



    

/* --------------MENU E BOTÕES MOBILE VERSION--------------- */

const characMobiButton = document.getElementById("button-charac-mobile")
characMobiButton.addEventListener("click", showMobiCharac)



function showMobiCharac(){
	for (let character of data.results){
		let cardsMobi = document.getElementById("get-cards-mobile");
        let newCardMobi = document.createElement("div");
		cardsMobi.appendChild(newCardMobi);
        newCardMobi.innerHTML = `<div class="all-cards-mobile">
        <div class="card-info-mobile">
         <div class="card-front-mobile"><img class="front-pic-mobile" src="${character.image}" alt=""><h1>${character.name}</h1></div>
            <div class="card-back-mobile">
            <img class="back-pic-mobile" src="${character.image}" alt="">
            <ul>
            <li>Name: ${character.name}</li>
            <li>Status: ${character.status}</li>
            <li>Species: ${character.species}</li> 
            <li>Type: ${character.type}</li>
            <li>Gender: ${character.gender}</li> 
            <li>Origin: ${character.origin.name}</li>
            <li>Location: ${character.location.name}</li>
            </ul>
            </div>
          </div>  
        </div>`;
	}
}