// Arrays - Conjunto de dados em um lista
/*
Arroz
Feijão
Papel toalha
Sal
Picanha
Banana
*/
var produto = document.getElementById("inserir-produto");
var minhaLista = [];

/**Numa lista, nos referimos aos itens começando pelo item 0 (zero)*/
// usamos o index para acessar

function salvar() {
  minhaLista.push(produto.value);
  produto.value = ''
}

function mostrarProdutos() {
  for (var i = 0; i < minhaLista.length; i++) {
    document.write("<p>Comprar: " + minhaLista[i] + "</p>");
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

  */
