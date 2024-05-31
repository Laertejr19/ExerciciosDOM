// Selecionando elementos por ID
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");
// Selecionando elementos por classe e tag
const paragrafo = document.querySelector(".paragrafo");
var lista = document.getElementById("lista");
var li = document.createElement("li");
// Modificando o conteúdo

li.innerHTML = "item 4";
// Modificando estilos
conteudo.style.backgroundColor = "lightblue";
titulo.style.color = "green";
titulo.style.fontSize = "24px";

// Adicionando e removendo classes


// Manipulando eventos
botao.addEventListener("click", function() {
alert("Botão clicado!");
lista.append(li);
conteudo.style.backgroundColor = "lightgreen";
});