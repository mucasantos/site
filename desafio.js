const minhaMain = document.getElementById("main");

function salvar() {
  //Criei o elemento
  var minhaDiv = document.createElement("div");
  //o javascript adiciona um <p> nesta div
  minhaDiv.innerHTML = `
<img src="img/menino.jpg" alt="Avatar" style="width:100%">
<div class="container">
  <h4><b>John Doe</b></h4> 
  <h3><b>john@email.com</b></h3> 
  <p>(11) 91234-5678</p>
  <p>Architect & Engineer</p>
</div>
`;

  //Adicionar uma classe
  minhaDiv.classList.add("card");
  //Adiciona a div criada a main!
  minhaMain.appendChild(minhaDiv);
}
