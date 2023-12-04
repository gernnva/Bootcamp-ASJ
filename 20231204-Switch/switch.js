let num = prompt("ingrese un numero");

let parOImpar = num % 2;

switch(parOImpar){
    case 0:
        alert("par");
        break;
    case 1:
        alert("impar");
        break;
    default:
        alert("no ingreso un numero valido")
}   