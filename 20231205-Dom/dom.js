

let boton = document.getElementById("boton");


boton.addEventListener("click", () => {

    let inputNombre = document.getElementById("nombre").value; 
    let inputApellido = document.getElementById("apellido").value;

    document.getElementById("h1").innerText = inputNombre;
    document.getElementById("h2").innerText = inputApellido;

    
})