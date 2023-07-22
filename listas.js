// A minha lista tem 6 elementos
//E acesso uma lista através dos índice (index)

//Atividade
/**
 * Criar um cadastro com 
 * Nome, email, telefone, endereço
 * Salvar em uma lista
 * Mostrar
 */

var produto = document.getElementById("produto");
var meusProdutos = document.getElementById("lista-produtos");

var minhaLista = [];

function salvar() {
  minhaLista.push(produto.value);
  meusProdutos.textContent = minhaLista;
}






for (let index = 0; index < minhaLista.length; index++) {
  console.log(index);
  console.log(minhaLista[index]);
}
