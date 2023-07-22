const minhaDiv = document.getElementById("main");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const nome = document.getElementById("nome");

function salvar() {
  var criarDiv = document.createElement("div");

  criarDiv.classList.add("card")

  criarDiv.innerHTML = `
<h2>Cadastro 01</h2>
<div class = "color">
<h3>Nome: ${nome.value}</h3>
<h3>Email: ${email.value}</h3>
<h3>Telefone: ${telefone.value}</h3>
</div>
`;

  minhaDiv.appendChild(criarDiv);
}
