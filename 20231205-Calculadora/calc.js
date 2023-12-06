let screen = document.getElementById("screen");
    //BOTONES DE LA CALCULADORA
let num0 = document.getElementById("btn0");
let num1 = document.getElementById("btn1");
let num2 = document.getElementById("btn2");
let num3 = document.getElementById("btn3");
let num4 = document.getElementById("btn4");
let num5 = document.getElementById("btn5");
let num6 = document.getElementById("btn6");
let num7 = document.getElementById("btn7");
let num8 = document.getElementById("btn8");
let num9 = document.getElementById("btn9");
const borrar = document.getElementById("borrar");
const sumar = document.getElementById("sumar")
const igual = document.getElementById("igual")
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const dividir = document.getElementById("dividir");

let valor1 = 0;
let valor2 = 0;

// FIN BOTONES
// Variable que guarda el numero mostrado en pantalla
let numEnPantalla = 0;
let sumaTotal = 0;
let operador = "";

//

num0.addEventListener("click", () => agregarDigito(0));
num1.addEventListener("click", () => agregarDigito(1));
num2.addEventListener("click", () => agregarDigito(2));
num3.addEventListener("click", () => agregarDigito(3));
num4.addEventListener("click", () => agregarDigito(4));
num5.addEventListener("click", () => agregarDigito(5));
num6.addEventListener("click", () => agregarDigito(6));
num7.addEventListener("click", () => agregarDigito(7));
num8.addEventListener("click", () => agregarDigito(8));
num9.addEventListener("click", () => agregarDigito(9));

function agregarDigito(digito) {
    numEnPantalla = numEnPantalla + digito;
    mostrarEnPantalla();
}

function mostrarEnPantalla () {
    screen.textContent = numEnPantalla;
}

borrar.addEventListener("click", () => borrarPantalla())

sumar.addEventListener("click", () => {
    valor1 = parseFloat(numEnPantalla);
    operador = "sumar"
    borrarPantalla();

});

restar.addEventListener("click", () => {
    valor1 = parseFloat(numEnPantalla);
    operador = "restar"
    borrarPantalla();

});

multiplicar.addEventListener("click", () => {
    valor1 = parseFloat(numEnPantalla);
    operador = "multiplicar"
    borrarPantalla();

});

dividir.addEventListener("click", () => {
    valor1 = parseFloat(numEnPantalla);
    operador = "dividir"
    borrarPantalla();
});

igual.addEventListener("click", () => {
    
    let resultado = 0;

    switch (operador) {
        case "sumar":
            resultado = valor1 + parseFloat(numEnPantalla);
            break;
        case "restar":
            resultado = valor1 - parseFloat(numEnPantalla);
            break;
        case "multiplicar":
            resultado = valor1 * parseFloat(numEnPantalla);
            break;
        case "dividir":
            resultado = valor1 / parseFloat(numEnPantalla);
            break;
    }

    screen.textContent = resultado;
    valor1 = 0;
    numEnPantalla = "";
    operador = "";  
})

function borrarPantalla () {
    numEnPantalla = "";
    mostrarEnPantalla();
}

function vaciarArray () {
    valores = [];
}

