let num = parseInt(prompt("ingrese un numero positivo"));
let contador = 0;

if(num < 0){
    num = parseInt(prompt("Segunda oportunidad: ingrese un numero valido"));
    
} 
while (num > 0){
    contador++;
    num = parseInt(prompt("ingrese un nuevo numero positivo"));
}

alert("ingreso un numero negativo");

if(contador > 0){
    alert(`ud ingreso ${contador} numeros`) 
} else{
    alert ("no muestro nada pq no ingreso ningun dato valido");
}