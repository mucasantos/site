var valor1 = document.getElementById("valor1");
var valor2 = document.getElementById("valor2");

function somar() {
  var resultado = Number(valor1.value) + Number(valor2.value);

  document.querySelector('h3').textContent = resultado
}

function subtrair() {
    var resultado = Number(valor1.value) - Number(valor2.value);
  
    document.querySelector('h3').textContent = resultado
  }

  function multiplicar() {
    var resultado = Number(valor1.value) * Number(valor2.value);
  
    document.querySelector('h3').textContent = resultado
  }

  function somar() {
    var resultado = Number(valor1.value) + Number(valor2.value);
  
    document.querySelector('h3').textContent = resultado
  }
