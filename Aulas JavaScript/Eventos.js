//Eventos
/*
Evento click no botao

no html 
   <button onclick="mensagem('José')">Clique aqui</button>
    ele chama o evento {mensagem()} que esta salvo no arquivo.js
    que nada mais é que um css do javaScript

    <button onmouseleave="mensagem2('Silton')">Passe o Mouse</button>
    ao passar o mouse e retirar de cima

    <button onmouseover="mensagem3('Silton')">Passe o Mouse</button>
    ao passar por cima

    <body onload="mensagem4('Silton')">
    este é para fazer o evento quando o load da pág for executado.

    <button onclick="mudacor('blue')">Azul</button>
    <button onclick="mudacor('red')">Vermelho</button>
    muda a cor

    <span id="Tamanho">Clique para aumentar o tamanho</span>
    <button onclick="aumentaFont('tam')">Tamanho</button>
    aumenta o tamanho

no arquivo.js    
function mensagem(nome){
    alert("Seja bem vindo: " +nome);
}

function mensagem2(nome){
    alert("Não vá embora " +nome+ " veja nosso conteudo didático");
}

function mudacor(cor){
    var elemento = document.getElementById("mensagemT");
    elemento.style.color = cor;
}

function aumentaFont(tam){
    var elemento = document.getElementById("Tamanho");
    elemento.style.fontSize = "50px";
}

*/
<body>
   <h1>Seja Bem vindo ao meu primeiro site em javascript </h1>
   <button onclick="mensagem('Silton')">Clique aqui</button>
   <button onmouseleave="mensagem2('Silton')">Passe o Mouse</button>
  
   <span id="mensagemT">Clique aqui para ver a cor mudar</span>
   <button onclick="mudacor('blue')">Azul</button>
   <button onclick="mudacor('red')">Vermelho</button>

   <span id="Tamanho">Clique para aumentar o tamanho</span>
   <button onclick="aumentaFont('tam')">Tamanho</button>


 <footer>©Copyright All Rights Reserved</footer>
</body>

function mensagem(nome){
    alert("Seja bem vindo: " +nome);
}

function mensagem2(nome){
    alert("Não vá embora " +nome+ " veja nosso conteudo didático");
}

function mensagem3(nome){
    alert("Passou por cima  " +nome+ " mas não clicou");
}
function mensagem4(nome){
    alert("Load da pagina... " +nome+ " seja bem vindo");
}

function mudacor(cor){
    var elemento = document.getElementById("mensagemT");
    elemento.style.color = cor;
  //  elemento.style.backgroundColor = color;
   
}

function aumentaFont(tam){
    var elemento = document.getElementById("Tamanho");
    elemento.style.fontSize = "50px";
}