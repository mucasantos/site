/**
 * Presentes dia 06/07
 * Daniel 
 * Daniel
 * Ricardo
 * Kaua Alves
 * Kaique
 * Alex
 * Carlos
 * Sabrina
 * Giovanna
 * Talita
 */

const minhaMain = document.getElementById("main");

//Dados de cadastro
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("tel");
const profissao = document.getElementById("profissao");
//radios
const feminino = document.getElementById("feminino");
const masculino = document.getElementById("masculino");

function salvar() {
  //Criei o elemento
  var minhaDiv = document.createElement("div");
  var image;
  if (feminino.checked) {
    image = "img/menina.jpg";
  } else if (masculino.checked) {
    image = "img/menino.jpg";
  } else {
    alert("Você precisa selecionar o gênero!");
    return;
  }
  //o javascript adiciona um <p> nesta div
  minhaDiv.innerHTML = `
            <img src="${image}" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${nome.value}</b></h4>
                <h3><b>${email.value}</b></h3>
                <p>${telefone.value}</p>
                <p>${profissao.value}</p>
            </div>
   `;
  //Adicionar uma classe
  minhaDiv.classList.add("card");
  //Adiciona a div criada a main!
  minhaMain.appendChild(minhaDiv);
}
