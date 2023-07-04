//Aula 03 Javscript básico
//Funções e manipulação DOM

var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");
var mostrarResultado = document.getElementById("result");
var divAnima = document.getElementById("anima");

var meuSlide = document.getElementById("slide1");
var valorParaSlide = document.getElementById("valor-slide");



function meuSlider() {
  var resultado = valorSlide.value;
  valorParaSlide.textContent = valorSlide.value;

  if (resultado < 10) {
    console.log("Primeiro if");
    valorParaSlide.style.backgroundColor = "red";
  } else if (resultado > 50 && resultado < 100) {
    console.log("Else if");
    valorParaSlide.style.backgroundColor = "blue";
  } else if (resultado > 300) {
    console.log("Else");
    valorParaSlide.style.backgroundColor = "violet";
  } else {
    valorParaSlide.style.backgroundColor = "green";
  }
}


function mudou() {
  divAnima.style.height = meuSlide.value + "px";
  divAnima.style.width = meuSlide.value + "px";
  divAnima.style.backgroundColor = "blue";
  if (meuSlide.value > 100 && meuSlide.value < 199) {
    divAnima.style.backgroundColor = "red";
  } else if (meuSlide.value > 200 && meuSlide.value < 299) {
    divAnima.style.backgroundColor = "violet";
  } else if (meuSlide.value > 299) {
    divAnima.style.backgroundColor = "green";
  }
}

function somar() {
  var resultado = Number(valor1.value) + Number(valor2.value);
  mostrarResultado.textContent = resultado;
}
function subtrair() {
  var resultado = Number(valor1.value) - Number(valor2.value);

  // Operadores lógicos
  // && - E
  // || - OU

  if (resultado < 0) {
    console.log("Primeiro if");
    mostrarResultado.style.color = "red";
  } else if (resultado > 50 && resultado < 100) {
    console.log("Else if");
    mostrarResultado.style.color = "blue";
  } else if (resultado > 100) {
    console.log("Else");
    mostrarResultado.style.color = "violet";
  } else {
    mostrarResultado.style.color = "green";
  }

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

/*
// atualiza o valor assim que mexe
meuSlide.oninput = function () {
  mostrarValorSlide.textContent = this.value;
}




*/
