# PokeInfos

Página web de visualização de dados sobre Pokémon criada por [Julia Terin](https://github.com/JuliaTerin) e [Sara Viana](https://github.com/SaraOhara) durante o Bootcamp Laboratória - SAP005.

## Índice

* [1. Introdução](#1-introdução)
* [2. Planejamento e Organização](#2-planejamento-e-organização)
* [3. Processo criativo](#3-processo-criativo)
* [4. Desenvolvimento](#4-desenvolvimento)
* [5. Funcionamento](#5-funcionamento)

***

## 1. Introdução

Segundo projeto da quinta geração do bootcamp de front-end da [Laboratória](https://github.com/Laboratoria).
O projeto consiste na criação de uma página web para visualização de um conjunto (set) de dados que se adeque às necessidades do usuário. Os dados escolhidos foram sobre [Pokémon](https://pt.wikipedia.org/wiki/Pok%C3%A9mon) e o projeto foi desenvolvido em dupla por Julia Terin e Sara Viana, durante três sprints na metodologia Agile.

## 2. Planejamento e Organização

O planejamento e organização do projeto foi feito com método Kaban, utilizando o [Trello](https://trello.com/) como ferramenta. Foram desenvolvidos passos advindos de histórias de usuários que foram criadas a partir de pesquisas.
Veja nosso quadro [aqui](https://trello.com/b/bV5vlV5C/2-proj-lab-data-lovers)!

### Pesquisas

A pesquisa foi realizada em duas etapas, a primeira com a criação de um formulário, com o uso do [Google Forms](https://workspace.google.com/intl/pt-BR/products/forms/?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-bkws-all-all-trial-e-dr-1009103-LUAC0011908&utm_content=text-ad-none-any-DEV_c-CRE_470571214281-ADGP_BKWS%20%7C%20Multi%20~%20Forms-KWID_43700057676889044-kwd-10647024857&utm_term=KW_google%20forms-ST_google%20forms&gclid=Cj0KCQiA2af-BRDzARIsAIVQUOeEjlhwWNjUEvxMxrVVHxE3bKqfabN3RMNj1c4ZByvIbU8LYcodkhEaArlTEALw_wcB&gclsrc=aw.ds), para que tivéssemos maiores informações sobre o público da franquia Pokémon, e a segunda com entrevista com usuários do jogo [Pokémon GO](https://pokemongolive.com/pt_br/).

O formulário foi desenvolvido com perguntas que possibilitassem uma análise das necessidades de potenciais usuários, ou seja de pessoas que já consomem o comteúdo da franquia Pokémon. de persona e das necessidades destes usuários.

![Imagem](https://github.com/JuliaTerin/PokeInfos-SAP005-data-lovers/blob/master/img_readme/pesq-genero.png?raw=true)![Imagem](https://github.com/JuliaTerin/PokeInfos-SAP005-data-lovers/blob/master/img_readme/pesq-conheceu.png?raw=true)![Imagem](https://github.com/JuliaTerin/PokeInfos-SAP005-data-lovers/blob/master/img_readme/pesq-interessesite.png?raw=true)![Imagem](https://github.com/JuliaTerin/PokeInfos-SAP005-data-lovers/blob/master/img_readme/pesq-sabersobre.png?raw=true)  

Também houve uma conversa/entrevista com duas pessoas, usuárias do jogo Pokémon Go, a mais de três anos. Usamos a oportunidade para confirmar dados que já havíamos observado através da pesquisa de formulário, para assim então, entendermos se nossas premissas seriam validadas para a criação de uma persona. 

### Personas e História de Usuário

A análise dos dados da pesquisa nos permitiram criar uma persona, para nos guiar nas histórias de usuários. Utilizamos o [Hubspot](https://www.hubspot.com/make-my-persona) como ferramenta para visualizar melhor nossa persona.

![Imagem](https://github.com/JuliaTerin/PokeInfos-SAP005-data-lovers/blob/master/img_readme/personana.png?raw=true)

Após criarmos Ana, partimos para as histórias de usuários. Geramos três histórias, cada uma contemplando necessidades conhecidas através das pesquisas, e assim, gerando etapas de trabalho com  definições de pronto claras.

![Imagem](https://github.com/JuliaTerin/PokeInfos-SAP005-data-lovers/blob/master/img_readme/HUum.png?raw=true)

Percebemos com a pesquisa que a maior procura de informações sobre Pokémon é diretamente ligada a consulta de dúvidas sobre os detalhes dos mesmos, o que influência no jogo ou na nostalgia de rever algo apreciado principalmente na infância. 

Você pode acessar nossas histórias de usuario [1](https://trello.com/c/O2YLY0pD/17-hist%C3%B3ria-de-usu%C3%A1rio-1), [2](https://trello.com/c/x8VdKalT/4-hist%C3%B3ria-de-usu%C3%A1rio-2) e [3](https://trello.com/c/rPYWh649/18-hist%C3%B3ria-de-usu%C3%A1rio-3) nos links com os critérios de aceitação e definições de pronto. 

## 3. Processo criativo

O design do projeto começou com um protótipo de baixa fidelidade desenvolvido em papel:

![Imagem](https://github.com/JuliaTerin/PokeInfos-SAP005-data-lovers/blob/master/img_readme/prot-menu.jpeg?raw=true)

![Imagem](https://github.com/JuliaTerin/PokeInfos-SAP005-data-lovers/blob/master/img_readme/prot-card.jpeg?raw=true)

Ele foi base para as mudanças futuras de adequação do site durante o processo de desenvolvimento.

Em seguida fizemos uma breve pesquisa de cores e referências, também estabelecendo imagens possíveis para integrar o layout do projeto.
Referência no estudo de cores:

![Imagem](https://github.com/JuliaTerin/PokeInfos-SAP005-data-lovers/blob/master/img_readme/cores.png?raw=true)

Escolhemos cores mais leves para trabalhar no layout, pois além da pesquisa demonstrar que nossa persona é feminina, nas pesquisas de produtos oficiais e lojas da franquia a base sempre é branco.

## 4. Desenvolvimento

A montagem do layout planejado começou a ser executada na primeira sprint. Antes de inserir as funcionalidades foi feito
um teste de navegação com um dos usuários entrevistados na fase de pesquisa do projeto.
Houveram mudanças no correr do desenvolvimento, iriamos exibir os cards dos Pokémon em um carrossel de imagens, porém, mudarmos para exibição em grade, o que facilitava a execução das buscas e filtros. O carrossel foi utilizado para links, e informações, adicionais.
As demais sprints foram focadas no desenvolvimento das lógicas da manipulação dos dados do banco, buscas, filtros, exibição de informações e informações de porcentagem.
A responsividade do site foi feita em conjunto com a execução do layout da página.
Algumas funcionalidades desejadas não foram implantadas ainda ao site até momento da entrega. Porém é um próximo paço trazer mais informações dos Pokémon através de um flip no card, ou link no card para outra página com informações mais detalhadas.

### Tecnológias

Neste projeto foram usados:

<ul>
<li>CSS</li>
<li>HTML</li>
<li>Vanilla JavaScript</li>
<li>Visual Studio Code com extenção Node-js</li>
</ul>

## 5. Funcionamento

O site permite que o usuário acesse informações sobre Pokémons das duas primeiras gerações, ou seja, Kanto e Jotoh. Ele apresenta uma barra de menu fixa, onde fica o logo do site, feito a partir do mesmo modelo de fonte do logo oficial da franquia, e que possibilita a navegação pela página ao clicar nas opções do menu. O background contém uma *fan art* nas cores principais do site, trazendo originalidade e maior harmonia ao layout.
Há um carrossel de imagens com links adicionais sobre o universo Pokémon, logo a baixo o campo de pesquisa por nome, o campo de filtragem por "tipo de Pokémon" e a ordenação alfabética crescente e decrescente. já que é uma das informações mais requisitada por usuários durante a pesquisa. Eles estão ordenados naturalmente por ordem de evolução.



## Acesse o site aqui: [PokeInfos](https://saraohara.github.io/PokeInfos-SAP005-data-lovers/#Poked%C3%A9x)

### Desenvolvido por Julia Terin e Sara Viana através do Projeto da [Laboratoria](https://www.laboratoria.la/) 💛

