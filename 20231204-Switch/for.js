let num = parseInt(prompt("Ingrese el ancho"));
let cadena ="";
/* Piramide acostada */

    for(let i=0; i <num; i++ ){
        cadena="";
        for (let j=0; j <= i; j++){
            cadena = cadena + "*";
        }
        console.log( cadena + "\n");
    }
/* Aca le resto uno a la primera vuelta para que no se repita la base */

    for(let i= (num-1); i > 0; i-- ){
        cadena="";
        for (let j=0; j < i; j++){
            cadena = cadena + "*";
        }
        console.log( cadena + "\n");
    }




    