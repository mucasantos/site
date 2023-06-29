function mudaCor(cor) {
  document.querySelector(".imagens").style.backgroundColor = cor;
}

function mudaImagem(numero) {
  document.querySelector(".imagens").style.backgroundImage =
    "url(img/img" + numero + ".jpg)";
}
