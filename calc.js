let display = document.getElementById("display");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
    let valueButton = e.target.innerText;
    
        if (valueButton === "C") {
            display.innerText = "";
        } else if (valueButton === "=") {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "Error!";
            }
        } else {
            display.innerText += e.target.innerText;
        }
    });
});