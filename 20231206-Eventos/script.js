let input = document.getElementById("input");
let cadena = "";
let h1 = document.getElementById("h1")

input.addEventListener("keydown", (evento) => {
    let letra = evento.key;
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        cadena = cadena + "_";
    } else if (letra === "Backspace") {
        cadena = cadena.slice(0, -1);
    } else {
        cadena = cadena + letra
    }
    
    h1.textContent = cadena;

} )