// ****************Primer ejercicio*******************

/*
var mensaje = "Hola mundo... desde un archivo externo"

alert(mensaje);

*/

// **************Segundo ejercicio  - CANTIDAD DE CARACTERES  ****************** 

/*

var texto = prompt("Ingrese un texto");

console.log(texto.length);

*/


// **************Tercer ejercicio   CALCULADORA DE EDAD  ****************** 

/*
var edad = parseInt(prompt("Ingrese su edad"));
var diasEdad = edad * 365;

alert(diasEdad);

*/

// **************Cuarto ejercicio   SUMA DE VALORES  ****************** 

/*
var num1 = parseInt(prompt("Primer numero a sumar"));
var num2 = parseInt(prompt("Segundo numero a sumar"));
var resultado = num1+num2;

console.log(resultado);
*/


// **************Quinto ejercicio   CALCULADORA DE ABASTECIMIENTO  ******************
//                                  PARTE 1
/*
var edad = 37;
var edadMax = 90;
var snackFav = "Papas Fritas";
var snackPorDia = 2;
var precioPorUnidad = 15;

var totalSnacks = ((edadMax-edad)*365*snackPorDia)

alert("necesitaras "+ totalSnacks + " snacks para que te alcancen hasta los " + edadMax + " años")

alert("vas a gastar para comprar todos esos snacks: $" + (precioPorUnidad*totalSnacks))

*/

// **************Quinto ejercicio   CALCULADORA DE ABASTECIMIENTO  ******************
//                                  PARTE 2
/* 
var cantDias = 14;
var presupuestoMax = 100000;

var comida;
var comidasTotalViaje = 28;

var presupuestoPorComida = Math.floor(presupuestoMax/comidasTotalViaje);

alert("Podés gastar " + presupuestoPorComida +  
    " en cada comida para que te alcance la plata durante los " + cantDias + " días de viaje");


*/

// **************Sexto ejercicio   CALCULADORA DE ABASTECIMIENTO  ******************
                    //ECMA6 --- PARTE 1 ---

/*                    

let nombre = "Gabriela";
let profesion = "programadora"


console.log(`${nombre} es ${profesion}`);

*/

                    //ECMA6 --- PARTE 2 ---

/*

let precio = parseFloat(prompt("ingrese el precio"));
let cantidad = parseInt(prompt("ingrese la cantidad"));

alert(`Precio Final $${precio*cantidad}`);

*/












