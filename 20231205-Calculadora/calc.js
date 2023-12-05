let screen = document.getElementById("screen");

let num0 = document.getElementById("btn0").value;
let num1 = document.getElementById("btn1").value;
let num2 = document.getElementById("btn2").value;
let num3 = document.getElementById("btn3").value;
let num4 = document.getElementById("btn4").value;
let num5 = document.getElementById("btn5").value;
let num6 = document.getElementById("btn6").value;
let num7 = document.getElementById("btn7").value;
let num8 = document.getElementById("btn8").value;
let num9 = document.getElementById("btn9").value;

let numEnPantalla = "";


function agregarNumero(num){
    numEnPantalla = numEnPantalla + ;
    console.log(numEnPantalla);
    mostrarEnPantalla();
}

function mostrarEnPantalla () {
    screen.textContent = numEnPantalla;
}


