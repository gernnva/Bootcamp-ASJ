// Obtener todos los botones "Comprar"
var botonesComprar = document.querySelectorAll(".botones.botonComprar");

// Agregar un controlador de eventos a cada botón
botonesComprar.forEach(function (boton, index) {
  boton.addEventListener("click", function () {
    // Obtener información del producto
    var producto = this.closest(".producto");
    var imgElement = producto.querySelector(".imgProductoGrid");
    var tituloElement = producto.querySelector("h3");
    var precioElement = producto.querySelector("h4");

    var imagenSrc = imgElement.src;
    var tituloTexto = tituloElement.textContent;
    var precioTexto = precioElement.textContent;

    // Obtener la información existente en localStorage
    var productosEnLocalStorage =
      JSON.parse(localStorage.getItem("productos")) || [];

      var productoExistente = productosEnLocalStorage.find(function (prod) {
        return prod.nombre === tituloTexto;
      });
  
      if (productoExistente) {
        // Si el producto ya está en el carrito, incrementar la cantidad
        productoExistente.cantidad += 1;
      } else {
        // Si el producto no está en el carrito, agregar uno nuevo
        var nuevoProducto = {
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
var productosEnLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];

// Mostrar información en los elementos HTML
var infoContainer = document.getElementById("infoContainer");

productosEnLocalStorage.forEach(function (producto) {

  // Crear un contenedor div para el producto  
  var cadaProductoContainer = document.createElement("div")
  cadaProductoContainer.classList.add("d-flex", "flex-row", "mb-3", "align-items-center","justify-content-around")


  // Crear elementos <p> para mostrar la información del producto
  var nombreP = document.createElement("p");
  var cantidadP = document.createElement("p");
  var precioP = document.createElement("p");
  var imagen = document.createElement("img");

  // Asignar la información a los elementos <p>
  nombreP.textContent = "Producto: " + producto.nombre;
  cantidadP.textContent = "Cantidad: " + producto.cantidad;
  precioP.textContent = "Precio: $" + producto.precio;
  imagen.src = producto.imagen;
  imagen.style.width = "80px";
  imagen.style.height = "80px";

  // Añadir los elementos al contenedor
  cadaProductoContainer.appendChild(imagen);
  cadaProductoContainer.appendChild(nombreP);
  cadaProductoContainer.appendChild(cantidadP);
  cadaProductoContainer.appendChild(precioP);
  

  // Añadir el contenedor del producto al contenedor principal
  infoContainer.appendChild(cadaProductoContainer);
  
});

var botonBorrar = document.getElementById("borrarPedidoTotal");

// Agregar un controlador de eventos al botón
botonBorrar.addEventListener("click", function () {
    // Borrar todo el contenido del localStorage
    localStorage.clear();
    window.location.href = "carrito.html";
});

// Calcular el subtotal sumando los precios de todos los productos
var subtotal = productosEnLocalStorage.reduce(function (total, producto) {
    var precioNumerico = parseFloat(producto.cantidad * producto.precio);
    return total + precioNumerico;
}, 0);

var subtotalElement = document.getElementById("subtotal");
subtotalElement.textContent = "$" + subtotal;




document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos con la clase "producto-link-detalle"
    var enlacesDetalle = document.querySelectorAll('.producto-link-detalle');

    // Agregar un controlador de eventos a cada enlace
    enlacesDetalle.forEach(function (enlace) {
      enlace.addEventListener('click', function () {
        // Obtener la URL de redirección desde el atributo data-href
        var url = this.getAttribute('data-href');

        // Redireccionar a la URL
        window.location.href = url;
      });
    });
  });
