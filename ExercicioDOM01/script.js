// Selecionando elementos por ID
const titulo = document.getElementById("titulo");
const botao = document.getElementById("botao");

// Selecionando elementos por classe e tag
const paragrafo = document.querySelector(".paragrafo");
const conteudo = document.querySelector("div");

// Modificando o conteúdo
titulo.textContent = "Título Modificado";
paragrafo.innerHTML = "Paragrafo normal";

// Modificando estilos
conteudo.style.backgroundColor = "lightblue";
titulo.style.color = "green";
titulo.style.fontSize = "24px";

// Adicionando e removendo classes
paragrafo.classList.add("destacado");
setTimeout(() => {
paragrafo.classList.remove("destacado");
}, 3000);

// Manipulando eventos
botao.addEventListener("click", function() {
alert("Botão clicado!");
paragrafo.textContent = "Botão clicado!";
conteudo.style.backgroundColor = "lightgreen";
});