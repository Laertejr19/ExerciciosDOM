function Aumenta() {

    var imagem = document.getElementById("img");

    var larguraAtual = imagem.width;
    var novaLargura = larguraAtual + 10;

    imagem.style.width = novaLargura + "px";
}

function Diminui() {

    var imagem = document.getElementById("img");

    var larguraAtual = imagem.width;
    var novaLargura = Math.max(larguraAtual - 10, 0);

    imagem.style.width = novaLargura + "px";
}
