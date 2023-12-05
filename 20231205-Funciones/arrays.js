// Fibonacci

const fibo = () => {

    let cant;
    do {
        cant = parseInt(prompt("Ingrese la cantidad de repeticiones"));
    } while(isNaN(cant) || cant <1);
    
    const arr = [0, 1];

    for(let i = 2; i < cant; i++){
        arr[i] = arr[i - 1] + arr [i - 2]
    }
    alert(arr);
}



