# :sparkling_heart: Data Lovers

Quer navegar por esse mundo cheio de aventuras? Acesse agora nossa aplicação e visualizae seus personagens preferidos!

https://julianaads.github.io/SAP005-data-lovers/src/

## Índice

* [1. Apresentação](#1-apresentacao)
* [2. Pesquisa](#2-rick-and-morty)
* [3. Usuário](#3-usuario)
* [4. Interface do Usuário](#4-interface-do-usuario)
* [5. Desenvolvimento do Projeto](#5-desenvolvimento-do-Projeto)
* [6. O Projeto](#6-hacker-edition)
* [7. Pontos de Melhoria](#7-considerações-técnicas)


***

## :receipt: 1. Apresentação

  Projeto desenvolvido em dupla durante o Bootcamp da Laboratória com o objetivo de construir uma aplicação Web capaz de visualisar e manipular dados de acordo com as necessidades do usuário.
  A temática escolhida para representar o projeto foi Rick and Morty, a animação é uma série adulta norte-americana de comédia e ficção científica estreada em 2013, que conta a história do cientista bebado Rick e seu neto pré adolescente Morty, que se envolvem em diversas aventuras perigosas.

## :bar_chart: 2. Pesquisa

Fizemos uma pesquisa atraves do Google forms para identificar qual nosso :dart: público alvo e quais informações os usuários gostariam de encontrar em nossa aplicação. A pesquisa obteve 160 respostas dentre os resultados obtivemos os seguintes dados:

![](/src/img/plataforma.jpeg)

:heavy_check_mark: 70,4% dos respondentes utilizam a Netflix como principal plataforma de consumo de séries e animações; 

![](/src/img/webApp.jpeg)

:heavy_check_mark: mais de 50% dos usuários utilizariam uma aplicação web com objetivo de relembrar o que aconteceu com os personagens quando uma nova temporada for lançada 

![](/src/img/panoramaGeral.png)

 :heavy_check_mark: 32,1% responderam que usariam a aplicação web para ter dados do panorama geral dos personagens da série. 
 
 ![](/src/img/cards.jpeg)
 
 :heavy_check_mark: E por fim, 67,9% dos usuarios disseram que gostariam de visualizar as informações em formato de card.

## :technologist: 3. Usuário

### Persona

Após o resultado da pesquisa, identificamos e validamos uma persona, ela se caracteriza como fã da série, que já assistiu todas as temporadas e consome este conteúdo periodicamente, dentro do nosso público alvo. Abaixo informações detalhadas:

![](/src/img/persona.jpeg)

###  História de Usuário

#### História 1
Eu Carina, potencial fã da série, quero ler a respeito da série e/ou assistir o trailer, para conhecer a animação.

Definição de Pronto: A Homepage deve apresentar trailer da 1º temporada da série com sinopse e link para página da série na Netflix


#### HIstória 2
Eu Ivan, fã da série, desejo visualizar os personagens e informações deles, para relembrar a conjuntura dos personagens

Definição de pronto: Todos os personagens e suas informações devem aparecer em forma de cards na pagina personagens

#### História 3
Eu Luan, fã da série e estudioso a crítica pública, desejo reordenar ou filtrar os personagens, para visualizar somente aqueles que satisfaçam a condição que escolhi e também qual o percentual que eles representam entre os personagens da série

Definição de pronto: A página personagens deve conter quatro filtros sendo eles: 
Espécies para filtrar as espécies dos personagens que aparecem ao longo da série e também quanstos % ele representa;
Status para filtrar personagens vivos, mortos ou desconhecidos,
Gênero para filtrar os personagens masculinos, femininos e desconhecidos,
Ordem para listar os personagens em ordem crescente, decrescente e de relevância (mais importante na série)



## :paintbrush: 4. Interface de usuário

### Protótipo de baixa qualidade

Após o resultados da pesquisa desenvolvemos um protótipo de baixa qualidade que acreditamos ser o que os usuários esperam encontrar ao acessar a aplicação. Como ferramenta de desenvolvimento de Layout utilizamos o paint e criamos uma homePage que a principio teriam três sub-páginas.

Abaixo o resultado:

![](/src/img/prototipo.jpeg)




### Testes de Usuabilidade e feedback

Os testes realizados com os usuários trouxeram os seguintes problemas:

- Dificuldade em visualizar os botões do menu
Resolução: trocamos as cores dos botões e de fundo, para melhor contraste

- Dificuldade em entender do que se trata o site e o objetivo dele
Resolução: inserimos texto de apresentação e trailer da série

Resultado do layout finalizado:

Home

![](/src/img/homedesktop.png)



Personagens

![](/src/img/personadesk.png)



### Responsividade

Sabendo que celular é o principal meio de acesso à internet deixamos nossa aplicação responsiva.

O resultado foi esse:

Home

![](/src/img/homeResponsiva.jpeg)



Personagens

![](/src/img/personagemResponsiva.jpeg)



## :rocket: 5. Desenvolvimento do Projeto

Utilizamos a ferramenta Trello para organizar todas as atividades que deveriam ser entregues até a data final do projeto, utilizamos a metodologia ágile entregando partes funcionais do projeto em cada uma das três sprints que tivemos.
Abaixo nosso quadro de organização:

![](/src/img/trello.jpeg)

### Aprendizado

:heavy_check_mark: Neste projeto aprendemos a manipular dados através de arquivo json.
:heavy_check_mark: Desenvolver testes unitários garantindo a funcionalidade da aplicação mesmo após realizar alterações na mesma.
:heavy_check_mark: Deixar a aplicação responsiva para todos os tamanhos de telas
:heavy_check_mark: Manipulação de Arrays e Objetos


## Devas 

Este belissímo projeto foi desenvolvido com muito carinho :smiling_face_with_three_hearts: pela dupla Bianca e Juliana 
