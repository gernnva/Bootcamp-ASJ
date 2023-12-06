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
let valores = [];

// FIN BOTONES
// Variable que guarda el numero mostrado en pantalla
let numEnPantalla = "";
let sumaTotal = 0;

//
num0.addEventListener("click", () => {
    numEnPantalla = numEnPantalla + num0.textContent;
    mostrarEnPantalla()
})

num1.addEventListener("click", () => {
    numEnPantalla = numEnPantalla + num1.textContent;
    mostrarEnPantalla()
})

num2.addEventListener("click", () => {
    numEnPantalla = numEnPantalla + num2.textContent;
    mostrarEnPantalla()
})

num3.addEventListener("click", () => {
    numEnPantalla = numEnPantalla + num3.textContent;
    mostrarEnPantalla()
})

num4.addEventListener("click", () => {
    numEnPantalla = numEnPantalla + num4.textContent;
    mostrarEnPantalla()
})

num5.addEventListener("click", () => {
    numEnPantalla = numEnPantalla + num5.textContent;
    mostrarEnPantalla()
})

num6.addEventListener("click", () => {
    numEnPantalla = numEnPantalla + num6.textContent;
    mostrarEnPantalla()
})

num7.addEventListener("click", () => {
    numEnPantalla = numEnPantalla + num7.textContent;
    mostrarEnPantalla()
})

num8.addEventListener("click", () => {
    numEnPantalla = numEnPantalla + num8.textContent;
    mostrarEnPantalla()
})

num9.addEventListener("click", () => {
    numEnPantalla = numEnPantalla + num9.textContent;
    mostrarEnPantalla()
})

borrar.addEventListener("click", () => borrarPantalla())

sumar.addEventListener("click", () => {
    //let valor1 = numEnPantalla
    valores.push(parseFloat(numEnPantalla));
    borrarPantalla()
})

igual.addEventListener("click", () => {
    valores.forEach(element => { 
        sumaTotal = sumaTotal + element;
        
    });
    sumaTotal += parseFloat(numEnPantalla);
    console.log(sumaTotal)
    console.log(valores)
    valores.splice(0, valores.length);
    screen.textContent = sumaTotal;
    console.log(valores)
})


function mostrarEnPantalla () {
    screen.textContent = numEnPantalla;
}

function borrarPantalla () {
    numEnPantalla = "";
    mostrarEnPantalla();
}



