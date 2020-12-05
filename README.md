# Batlle Win

## Índice

* [1. Definição de produto](#1-definição-de-produto)
* [2. Desenvolvimento do projeto](#2-desenvolvimento-do-projeto)
* [3. Histórias de usuários](#3-histórias-de-usuários)
* [4. Interface (UI)](#4-interface-ui)
* [5. Testes unitários](#5-testes-unitários)


***

## 📌 1. Definição de produto

Criamos essa aplicação pensando nos novos usuários do jogo Pokémon Go. Nosso site permite que esses usuários possam buscar pelo Pokémon que irá batalhar e de forma rápida, ter acesso as informações desse Pokémon. Ao buscar o Pokémon, o usuário também terá acesso a uma tabela com os Pokémons que ele poderá usar na batalha para obter vantagem.

[Confira aqui](https://karinafs.github.io/battle-win/)

---

## 👩‍💻 2. Desenvolvimento do projeto

### ➡️ Planejamento

O planejamento do projeto foi realizado através do Trello.

![trello](trello.png)

### ➡️ Tema

Escolhemos o tema por uma questão de afinidade com Pokémon e, também, a partir dos dados disponíveis para realizar o projeto.

### ➡️ Protopersonas

Criamos as protopersonas baseado em dados de usuários do jogo Pokémon Go e depois adaptamos de acordo com as entrevistas com os usuários reais do jogo. 

👨 **Protopersona 1**

![avatar1](Avatar_persona_1.png)

**Nome** Huojin "Felipe" Lin

_Tímido, engajado, irritadiço_

### Dados demográficos
- 36 anos
- Filho de imigrantes chineses
- Mora com os pais e os avós paternos em Guarulhos, SP
- Trabalha no restaurante dos pais

---

### Comportamentos
- Pratica caligrafia chinesa
- Está fazendo curso de culinária internacional
- É muito apegado com a avó
- Gosta muito de jogos dos consoles portáteis e mais antigos (8-bit)

---

### Necessidades e objetivos
- Aprender inglês
- Arranjar uma namorada que não seja chinesa
- Fazer um curso de gastronomia na Europa (França ou Itália)
- Ter uma carreira de sucesso
- Se casar

👩 **Protopersona 2**

![avatar2](avatar_persona_2.png)

**Nome** Fernanda Silva

_Descontraída, responsável, parceira_

- Advogada

___

**Dados demográficos**
- 25 anos
- Mora sozinha no Rio de Janeiro
- Formada em direito
- Trabalha em um escritório de advocacia

___

**Comportamentos**
- Jogar vídeo game (RPG)
- Correr
- Ler 
- Sair com os amigos
- Assistir Netflix
- Levar o cachorro para passear

___

**Necessidades e objetivos**
- Adotar um gato
- Morar mais próximo do parque da sua cidade
- Ter seu próprio escritório de advocacia 

### ➡️ Entrevistas com jogadores

Realizamos entrevitas com 4 jogadores de Pokémon Go para validarmos as protopersonas e entendermos seus interesses pelo jogo. Fizemos perguntas pessoais como, profissão, idade, hobbes, etc. e também perguntas sobre o jogo como, qual o interesse pelo jogo, queixas de usabilidade e o que ajudaria a ter uma experiência melhor. 
Percebemos, de uma forma geral, que o maior interesse dos entrevistados pelo jogo é a possibilidade de interagir com outros jogadores, como as [Batalhas de Reides](https://globoesporte.globo.com/esports/noticia/como-batalhar-no-pokemon-go-enfrente-outros-jogadores-no-pvp.ghtml)

---

## 📄 3. Histórias de usuários

Com base na entrevista com os usuários, criamos 4 histórias de usuários.

### História 1 | Landing page

**Como jogador iniciante, quero entrar e ver de cara uma landing page introdutória para entender como a aplicação funciona**

**Critérios de aceitação**

* A landing page deve ter uma imagem bonita e interessante
* Paleta de cores agradável
* Pequeno texto de chamada
* Botão para a ação, que ao ser clicado encaminha o usuário para a próxma seção do site
* A transição de rolagem para a próxima seção deve ser suave

**Definição de pronto**

* Foram incorporados os melhoramentos necessários identificados no teste de usabilidade
* O código tem seus próprios testes e passa neles com, no mínimo, 80%
* O código está de acordo com o guia de estilos
* O código passou por code review
* A história implementada foi testada com pelo menos, 3 usuários
* O código está no GitHub

### História 2 | Buscar Pokémon rival

**Como jogador, quero buscar o Pokémon contra o qual irei lutar para ver informações sobre ele que me ajudem nas batalhas**

**Critérios de aceitação**

* Input para digitar o nome do Pokémon
* Botão para buscar o Pokémon
* Card com informações do Pokemon: foto, número, tipo, CP, ataque, defesa, tipos contra qual ele é forte e fraco
* Essas informações aparecem em formato de tabela

**Definição de pronto**

* Foram incorporados os melhoramentos necessários identificados no teste de usabilidade
* O código tem seus próprios testes e passa neles com, no mínimo, 80%
* O código está de acordo com o guia de estilos
* O código passou por code review
* A história implementada foi testada com pelo menos, 3 usuários
* O código está no GitHub

### História 3 | Tabela de Pokémons vantajosos

**Como jogador, ao digitar o nome do Pokémon que irei lutar, desejo ver quais são mais fortes contra ele, do mais para o menos forte, para ganhar vantagem na batalha**

**Critérios de aceitação**

* Criar uma função com filtro por tipo e CP para mostrar os Pokémons mais vantajosos
* Os Pokémons apareceram em ordem decrescente por tipo e CP
* Há um dropdown menu para o usuário escolher ordenar os pokémons por maior ataque ou defesa, ordem alfabética crescente ou decrescente dos nomes
* Inserir cálculo agregado mostrando que X% pokémons são do tipo Y e A% dos pokémons são do tipo B

**Definição de pronto**

* Foram incorporados os melhoramentos necessários identificados no teste de usabilidade
* O código tem seus próprios testes e passa neles com, no mínimo, 80%
* O código está de acordo com o guia de estilos
* O código passou por code review
* A história implementada foi testada com pelo menos, 3 usuários
* O código está no GitHub

### História 4 | Infos dos melhores Pokémons

**Como jogador, desejo ver os Pokémons mais vantajosos para mim através de uma tabela para conseguir visualizá-los rapidamente e em ordem**

**Critérios de aceitação**

* Os Pokémons apareceram em uma tabela horizontal
* Na tabela aparecerá nome, imagem, tipos do próprio pokémon, tipos contra o qual ele é efetivo, tipos contra o qual ele tem desvantagem, CP, ataque e defesa

**Definição de pronto**

* Foram incorporados os melhoramentos necessários identificados no teste de usabilidade
* O código tem seus próprios testes e passa neles com, no mínimo, 80%
* O código está de acordo com o guia de estilos
* O código passou por code review
* A história implementada foi testada com pelo menos, 3 usuários
* O código está no GitHub

---

## 🗺️ 4. Interface (UI)

A interface foi melhorada de acordo com o teste de usabilidade. A imagem da primeira página foi pensada no jogo. Clicando no botão **Clique aqui** o usuário é direcionado para a próxima página onde aparece uma mensagem introdutória e um campo para buscar o Pokémon que irá batalhar. Ao clicar no botão **Buscar Pokémon**, aparecerá um card com as informações do Pokémon e, logo abaixo, uma lista em formato de tabela de Pokémons que o usuário poderá usar na batalha para obter vantagem. A lista é baseada no tipo do Pokémon que é forte contra qual o usuário irá batalhar. 
É possível ordenar a lista por ordem crescente e decrescente de **Combat Power** e ordenar o nome do Pokémon de **A-Z** e **Z-A**.

### ➡️ Responsividade

**Interface app**

![img](poke.png)
![img](mon.png)
![img](pokeke.png)

**Interface desktop**

![img](responsivo1.jpeg)
![img](responsivo2.jpeg)
![img](responsivo3.jpeg)

**Calculo**

????????????????????????? (foto do calculo)

### ➡️ Protótipo de baixa fidelidade

Criamos o protótipo da página inicial e da página para o usuário buscar o Pokémon de acordo com as histórias de usuários.

**Landing page**

![img](prototipo1.jpeg)

**Buscar Pokémon**

![img](prototipo2.jpeg)

### ➡️ Teste de usabilidade

Realizamos melhoramentos necessários detectados nos testes de usabilidade. Os usuários queriam uma imagem de fundo com mais contexto, e com cores que remetessem mais ao jogo Pokémon Go, e não a jogos mais antigos, como o pokémon stadium (para Nintendo 64). Também solicitaram que ficasse clara a diferença entre o Pokémon do card (rival) e os da tabela (os melhores para serem escolhidos), e por isso foram inseridas as tarjas verdes para identificação.

Melhoramentos realizados:

**Página inicial**

* Primeira versão

![landing-page](landing-page.png)

* Versão final

![final-version](final-version.png)

**Card**

* Primeira versão

![card-inicial](card-inicial.png)

* Versão final

![card-final](card-final.png)

**Tabela**

* Primeira versão

![tabela1](tabela1.jpeg)

* Versão final

![tabela2](tabela2.png)

---

## 🔨 5. Testes unitários

A aplicação passa em 100% dos testes.

![testes](test-pass.png)

---

Feito com 💛 por [Akemi Mitsueda](https://github.com/akemimeka) e [Karina Santos](https://github.com/KarinaFS) na [Laboratoria](https://www.laboratoria.la/br).