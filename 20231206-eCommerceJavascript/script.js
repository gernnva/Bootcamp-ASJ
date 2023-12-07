// Obtener todos los botones "Comprar"
let botonesComprar = document.querySelectorAll(".botones.botonComprar");

// Agregar un controlador de eventos a cada botón
botonesComprar.forEach(function (boton, index) {
  boton.addEventListener("click", function () {
    // Obtener información del producto
    let producto = this.closest(".producto");
    let imgElement = producto.querySelector(".imgProductoGrid");
    let tituloElement = producto.querySelector("h3");
    let precioElement = producto.querySelector("h4");

    let imagenSrc = imgElement.src;
    let tituloTexto = tituloElement.textContent;
    let precioTexto = precioElement.textContent;

    // Obtener la información existente en localStorage
    let productosEnLocalStorage =
      JSON.parse(localStorage.getItem("productos")) || [];

      let productoExistente = productosEnLocalStorage.find(function (prod) {
        return prod.nombre === tituloTexto;
      });
  
      if (productoExistente) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        productoExistente.cantidad += 1;
      } else {
        // Si el producto no está en el carrito, agregar uno nuevo
        let nuevoProducto = {
          imagen: imagenSrc,
          nombre: tituloTexto,
          precio: precioTexto,
          cantidad: 1, // Inicializar la cantidad en 1
        };
        productosEnLocalStorage.push(nuevoProducto);
      }
  
      // Guardar el array actualizado en localStorage
      localStorage.setItem("productos", JSON.stringify(productosEnLocalStorage));
  
      // Redireccionar a la página de carrito
      window.location.href = "carrito.html";
  });
});

// Obtener información desde localStorage
let productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];

// Mostrar información en los elementos HTML
let infoContainer = document.getElementById("infoContainer");

productosEnLocalStorage.forEach(function (producto) {

  // Crear un contenedor div para el producto  
  let cadaProductoContainer = document.createElement("div")
  cadaProductoContainer.classList.add("d-flex", "flex-row", "mb-3", "align-items-center","justify-content-around")


  // Crear elementos <p> para mostrar la información del producto
  let nombreP = document.createElement("p");
  let cantidadP = document.createElement("p");
  let precioP = document.createElement("p");
  let imagen = document.createElement("img");

  // Asignar la información a los elementos <p>
  nombreP.textContent = "Producto: " + producto.nombre;
  cantidadP.textContent = "Cantidad: " + producto.cantidad;
  precioP.textContent = "Precio: $" + producto.precio;
  imagen.src = producto.imagen;
  imagen.style.width = "80px";
  imagen.style.height = "80px";

  // Crear el botón de eliminación
  var botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.classList.add("botonEliminar", "btn-danger", "btn"); // agregar clases de bootstrap

  // click y borra el articulo completo
  botonEliminar.addEventListener("click", function () {
    // Eliminar el producto del localStorage
    var index = productosEnLocalStorage.indexOf(producto);
    if (index !== -1) {
      productosEnLocalStorage.splice(index, 1);
      // Actualizar el array en localStorage
      localStorage.setItem("productos", JSON.stringify(productosEnLocalStorage));
      // Actualizar la interfaz
      
      infoContainer.removeChild(cadaProductoContainer);
      alert("producto eliminado")
      window.location.href = "carrito.html";
    }
  });

  // Añadir los elementos al contenedor
  cadaProductoContainer.appendChild(imagen);
  cadaProductoContainer.appendChild(nombreP);
  cadaProductoContainer.appendChild(cantidadP);
  cadaProductoContainer.appendChild(precioP);
  cadaProductoContainer.appendChild(botonEliminar);

  // Añadir el contenedor del producto al contenedor principal
  infoContainer.appendChild(cadaProductoContainer);
  
});

let botonBorrar = document.getElementById("borrarPedidoTotal");

// Agregar un controlador de eventos al botón
botonBorrar.addEventListener("click", function () {
    // Borrar todo el contenido del localStorage
    localStorage.clear();
    window.location.href = "carrito.html";
});

// Calcular el subtotal sumando los precios de todos los productos
let subtotal = productosEnLocalStorage.reduce(function (total, producto) {
    let precioNumerico = parseFloat(producto.cantidad * producto.precio);
    return total + precioNumerico;
}, 0);

let subtotalElement = document.getElementById("subtotal");
subtotalElement.textContent = "$" + subtotal;




document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos con la clase "producto-link-detalle"
    let enlacesDetalle = document.querySelectorAll('.producto-link-detalle');

    // Agregar un controlador de eventos a cada enlace
    enlacesDetalle.forEach(function (enlace) {
      enlace.addEventListener('click', function () {
        // Redireccionar a la URL
        window.location.href = 'producto.html';
      });
    });
  });
