//Conceito de variáveis
//Interagir com o DOM (Document Object Model)
//Interagir com clicks
//o que é uma função e como utilizar

//Atividade: Quando clicar no botao, mudar o conteudo do h1

var nome = "Samuel Santos";
var idade = 0;
var email = "muca@email.com";
var telefone = "11 91234-5678";
var salario = "19.678,89";

var tam = 10
var margem = 10

//pegar o elemento do HTML com
//getElementById

/**
 * Elementos como h1, div que tem texto dentro,
 * pegamos o conteúdo com .textContent
 * input, para pegar o valor, usamos o .value
 */

var minhaDiv = document.getElementById("cor")

function mudarCor(cor) {
    minhaDiv.style.backgroundColor = cor
}
function mudarImagem(imagem) {
    var img = "url(img/img"+ imagem +".jpg)"
    minhaDiv.style.backgroundImage = img
}
