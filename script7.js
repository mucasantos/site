/**Passos pra criar um elemento
 * 1. Usamos o comando document.createElement
 * 2. Qual o código HTML que vai dentro de elemento
 * (elemento.innerHTML)
 * 3. Adicionar o elemento dentro de outro - como filho - 
 * através do comando (elementoPai.appendChild)
 */
const minhaMain = document.getElementById("main")
//Criei o elemento
var minhaDiv = document.createElement("div")
//o javascript adiciona um <p> nesta div
minhaDiv.innerHTML = ("<p>Criado pelo javascript</p>")
minhaDiv.innerHTML += ("<button>Cor</button>")
minhaDiv.innerHTML += ("<button>Tamanho</button>")
minhaDiv.innerHTML += ("<button>Largura</button>")
minhaDiv.innerHTML += ("<button>Executar</button>")
//Adicionar uma classe
minhaDiv.classList.add("minhadiv")
//Adiciona a div criada a main!
minhaMain.appendChild(minhaDiv)






