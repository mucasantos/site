

function mostrar(num) {
  document.getElementById("image" + num).style.backgroundImage =
    "url('img/img" + num + ".jpg')";
}
function apagar (num){
    document.getElementById("image" + num).style.backgroundImage = ""
}