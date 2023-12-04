let num;
let inicioVariable = 0
let sumaTotal = 0;

do {
    num = prompt("ingrese un numero")
} while (isNaN(num))

alert("gracias por ingresar un numero")


while (inicioVariable < num){
    sumaTotal=sumaTotal+inicioVariable;
    inicioVariable++;
}

alert( `la suma total es ${sumaTotal} y el promedio es ${sumaTotal/(num)}`)