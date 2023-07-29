/*
 * Sinais de igualdade no javaScript
 * = (apenas 1) é atribuição de valores
 * == verificar se são iguais (1 == 1) - Retorna
 * true ou verdadeiro 1==2 false; (1 == "1") True
 * === verifica se são realmente iguais! (1 === "1") false
 * (1 === 1) True! (os tipos de dados tem qu ser igual, bem
 * como o valor!)
 *
 * Operadores lógicos E e OU
 *
 * algo === x OU algo === y  (||)
 * algo === x E algo === y  (&&)
 */

//Criar as funções para calcular!
//Se o resultado for menor que 0,
// deve mostrar o número em vermelho,
// se for maior do 20, em azul e caso
// contrário, em verde!

var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var resultado = document.getElementById("resultado");

function calcular(operacao) {
  //Criei uma variável pra guardar a soma!

  try {
    var minhaSoma = eval("Number(numero1.value)" + operacao +"Number(numero2.value)");

    if (isNaN(minhaSoma)) {
      alert("Verifique os campos...")
      return
    }
  } catch (error) {
    alert(error)
  }

  console.log(minhaSoma)


/*
  if (operacao === "+") {
    var minhaSoma = Number(numero1.value) + Number(numero2.value);
  } else if (operacao === "-") {
    var minhaSoma = Number(numero1.value) - Number(numero2.value);
  } else if (operacao === "*") {
    var minhaSoma = Number(numero1.value) * Number(numero2.value);
  } else if (operacao === "/") {
    var minhaSoma = Number(numero1.value) / Number(numero2.value);
  } else {
    alert("Não conheço!!!")
  }

  */
  if (minhaSoma < 0) {
    resultado.style.color = "red";
  } else if (minhaSoma > 100 && minhaSoma < 200) {
    resultado.style.color = "blue";
  } else {
    resultado.style.color = "green";
  }
  resultado.textContent = minhaSoma;
}

function mudar() {
    resultado.style.backgroundColor = "blue"
}