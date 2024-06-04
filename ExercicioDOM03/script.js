// Selecionando elementos por ID
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

const paragrafo = document.querySelector(".paragrafo");
var lista = document.getElementById("lista");
var li = document.createElement("li");


li.innerHTML = "item 4";

conteudo.style.backgroundColor = "lightblue";
titulo.style.color = "green";
titulo.style.fontSize = "24px";




botao.addEventListener("click", function() {
alert("Botão clicado!");
lista.append(li);
conteudo.style.backgroundColor = "lightgreen";
});