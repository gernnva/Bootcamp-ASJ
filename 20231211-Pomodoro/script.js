let spanIntento = document.getElementById(".message");
function agregarColorAlCuadrado (num = 6) {
    for (let i = 0; i < num; i++) {
            cuadrados[i].style.backgroundColor = colors[i];
    }
}
function mostrarMensaje(num) {
    for (let i = 0; i < num; i++) {
            cuadrados[i].addEventListener("click", function () {
                    let clickedColor = cuadrados[i].style.backgroundColor;
                    
                    if (pickedColor === clickedColor) {
                            spanIntento.innerText = "¡Correcto!";
                            alert("¡Correcto!")
                            resetGame();
} else {
                            cuadrados[i].style.backgroundColor = "#232323";
                            spanIntento.innerText = "Intente nuevamente.";
                            alert("Intente nuevamente.")
                    }
            })
    }
}
function resetGame() {
    for (let i = 0; i < cuadrados.length; i++) {
            cuadrados[i].style.backgroundColor = colors[i];

    }
}


let colors = ["rgb(218, 24, 24)", "rgb(24, 218, 50)", "rgb(54, 159, 235)", "rgb(255, 25, 213)", "rgb(91, 27, 113)", "rgb(28, 141, 70)"];
let cuadrados = document.querySelectorAll(".square");
let bodyGame = document.getElementById("body-game");
let spanTitulo = document.getElementById("colorDisplay");
let pickedColor = colors[Math.floor(Math.random() * 7)];



// borrar la pantalla antes de que aparezcan los colores
// ver el tema de seleccion de colores



let easy = document.getElementById("easy");
easy.addEventListener("click", () => {
    agregarColorAlCuadrado (3);
    spanTitulo.innerText = pickedColor; //Color a adivinar
    console.log(pickedColor)
    mostrarMensaje(3);
} )

let hard = document.getElementById("hard");
hard.addEventListener('click', () => {
    agregarColorAlCuadrado(6);
    spanTitulo.innerText = pickedColor; //Color a adivinar
    console.log(pickedColor)
    mostrarMensaje(6);
})
