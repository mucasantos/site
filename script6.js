// Arrays - Conjunto de dados em um lista
/**Numa lista, nos referimos aos itens começando pelo item 0 (zero)*/
// usamos o index para acessar
var minhaLista = [];
var produto = document.getElementById("produto")
//Paga a main que criei pelo ID
var main = document.getElementById("main")

function salvar() {
  minhaLista.push(produto.value)
  produto.value = ''
}
function mostrarProdutos() {
  //Limpo a main, para colocar os dados da lista
  main.innerHTML = ''

  for (var index = 0; index < minhaLista.length; index++) {
    //O javascript criou uma div pra mim!
    var minhaDiv = document.createElement("div")
    //o javascript adiciona um <p> nesta div
    minhaDiv.innerHTML = ("<p>"+ minhaLista[index] + "</p>")

    //Adiciona a div criada a main!
    main.appendChild(minhaDiv)
   } 
}

const minhaDiv = document.getElementById("crescer");
async function crescerDiv() {
  minhaDiv.style.backgroundColor = "blue";

  for (i = 0; i < 600; i++) {
    minhaDiv.style.height = i + "px";
    minhaDiv.style.width = i + "px";
    await delay(10);
  }
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/*
  if(i >100 && i <200){
            minhaDiv.style.backgroundColor = "green"

        } else if(i > 200&& i <300){
            minhaDiv.style.backgroundColor = "yellow"

        }else if(i > 300&& i <400){
            minhaDiv.style.backgroundColor = "grey"

        }else if(i > 400&& i <500){
            minhaDiv.style.backgroundColor = "violet"

        }else if(i > 500){
            minhaDiv.style.backgroundColor = "purple"

        } else {
            minhaDiv.style.backgroundColor = "green"
        }


        /Adicionar elementos

        var main = document.getElementById("main");

function salvar() {
  minhaLista.push(produto.value);
  produto.value = ''
}

function mostrarProdutos() {
  main.innerHTML = ''

  for (var i = 0; i < minhaLista.length; i++) {
    var elemento = document.createElement('div')
    elemento.innerHTML = "<p>Comprar: " + minhaLista[i] + "</p>";
    main.appendChild(elemento)
  }
}
  */
