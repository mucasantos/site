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

function mostrar() {
  document.querySelector("#nome").textContent = nome;
  document.querySelector("#idade").textContent = idade;
  document.querySelector("#email").textContent = email;
  document.querySelector("#telefone").textContent = telefone;
  document.querySelector("#salario").textContent = salario;
}

function mudarCor() {
  document.getElementById("titulo2").style.backgroundColor = "green";
  document.querySelector("h1").style.backgroundColor = "red";
  document.querySelector("button").style.backgroundColor = "violet";
}

function aumentar() {
  idade = idade + 1;
  document.getElementById("titulo2").textContent = idade
}

function diminuir() {
  idade = idade - 1;
  document.getElementById("titulo2").textContent = idade
}

function correr() {
    margem = margem + 10
    document.getElementById("titulo2").style.margin = margem + "px"   
}
function zerar() {
    margem = 10
    document.getElementById("titulo2").style.margin = margem + "px"   
tam = 10
    document.querySelector("div").style.height = tam + "px"   
    document.querySelector("div").style.width = tam + "px"   

}
function aumentar() {
    tam = tam + 10
    document.querySelector("div").style.height = tam + "px"   
    document.querySelector("div").style.width = tam + "px"   
}