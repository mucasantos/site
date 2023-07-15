/**
 * Aula sobre classes - Parte 1
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

class Pessoa {
  constructor(nome, email, profissao, telefone, genero, imagem) {
    this.email = email;
    this.nome = nome;
    this.profissao = profissao;
    this.telefone = telefone;
    this.genero = genero;
    this.image = imagem;
  }
}

var dadosClientes = [];

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

  var cadastro = new Pessoa(
    nome.value,
    email.value,
    profissao.value,
    telefone.value,
    "masculino",
    image
  );

  dadosClientes.push(cadastro);

  minhaDiv.innerHTML = `
            <img src="${image}" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${cadastro.nome}</b></h4>
                <h3><b>${cadastro.email}</b></h3>
                <p>${cadastro.telefone}</p>
                <p>${cadastro.profissao}</p>
            </div>
   `;
  //Adicionar uma classe
  minhaDiv.classList.add("card");
  //Adiciona a div criada a main!
  minhaMain.appendChild(minhaDiv);

  console.log(dadosClientes);
}

