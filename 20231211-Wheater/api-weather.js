let btnEnviar = document.getElementById("btn-enviar");
let txtCiudad = document.getElementById("txt-ciudad");
let spanCiudad = document.getElementById("ciudad");

function cargarCiudad(ciudad) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad +"&appid=dcec7df661b1e6b0edab51d796b7339c")
    .then((response) => response.json())
    .then((json) => {
        spanCiudad.textContent = json.name;
        document.querySelector("#temperatura").innerHTML = (json.main.temp).toFixed(1);
        console.log(json);
    })
    .catch((error) => console.log("Error"));
    
}

btnEnviar.addEventListener("click", ()=>{
    let ciudad = txtCiudad.value;
    document.querySelector(".container").style.visibility = "visible";
    cargarCiudad(ciudad);

});