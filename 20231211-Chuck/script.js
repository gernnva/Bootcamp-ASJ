let actualizar = document.getElementById("actualizar");
let info = document.getElementById("info");

actualizar.addEventListener("click", () => {

  // let xhttp = new XMLHttpRequest();
  // xhttp.open("GET", `https://pokeapi.co/api/v2/pokemon/${poke}`);
  // xhttp.send();

  // xhttp.onreadystatechange = function () {
  //   if (this.readyState == 4 && this.status == 200) {
  //     let datoPokemon = JSON.parse(this.responseText);
  //     console.log(datoPokemon);
  //     imagen.setAttribute("src", datoPokemon.sprites.front_default);
  //     info.innerText = datoPokemon.name;
  //   }
  // };

  //FETCH
  console.log("utilizando FETCH");

  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => response.json()) //convertir a JSON
    .then((json) => {
      console.log(json.value);
      info.innerText = json.value;
    })
    .catch((error) => console.log("Ocurrió un error: " + error));
});


