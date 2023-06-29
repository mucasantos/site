//document --> é o meu HTML
//querySelector --> o que eu vou selecionar!
var titulo = document.querySelector("h1");

var idade = document.querySelector(".idade");
var telefone = document.querySelector(".telefone");
var nome = document.querySelector(".nome");

// Criação de variáveis
var idadeAluno = 46;
var telefoneAluno = "11 98888-1111";
var nomeAluno = "Samuel Santos";

titulo.textContent = "Aulas de JavaScript!";
nome.textContent = nomeAluno;
idade.textContent = idadeAluno;
telefone.textContent = telefoneAluno;

document.write("<p style='color:#F00'>Senai Mariano Ferraz</p>");
document.write("<h1>Ola pessoal!</h1>");

function mudaNome() {
  telefone.textContent = "Clicouuu!!";

}

function mais(){
    idade.textContent = idadeAluno++
    document.querySelector("#mais").style.backgroundColor = "blue"
    document.querySelector("#menos").style.backgroundColor = "red"

}


function menos(){
    idade.textContent = idadeAluno--
    document.querySelector("#mais").style.backgroundColor = "red"
    document.querySelector("#menos").style.backgroundColor = "blue" 
}

function main() {
  idade = idade + 1 
}

function menos() {
  idade = idade - 1 
}