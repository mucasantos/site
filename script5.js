//Aula 03 Javscript básico
//Funções e manipulação DOM

var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var mostrarResultado = document.getElementById("result")

function somar() {
  var resultado = Number(valor1.value) + Number(valor2.value);
  mostrarResultado.textContent = resultado;
}

function subtrair() {
  var resultado = Number(valor1.value) - Number(valor2.value);
  mostrarResultado.textContent = resultado;
}

function multiplicar() {
  var resultado = Number(valor1.value) * Number(valor2.value);
  mostrarResultado.textContent = resultado;
}

function dividir() {
  var resultado = Number(valor1.value) / Number(valor2.value);
  mostrarResultado.textContent = resultado;
}
