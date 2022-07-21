// ``let elemento;
// elemento = document;
// console.log(elemento);
// // solicitar el nombre al cliente
// let ingresarNombre = prompt("ingresa su nombre o ESC para interrumpir");
// let texto = " ";
// while (ingresarNombre != "ESC" && ingresarNombre != "esc") {
//   texto += ingresarNombre + " ";
//   ingresarNombre = prompt("ingrese su nombre o ESC para interrumpir");
// }
// alert("Hola" + texto + "Bienvenido a nuestra tienda");

// //mostrar final del descuento
// const finalDescuento = new Date("july 31, 2022");
// alert("Descuento del 10% finaliza el " + finalDescuento.toLocaleString());

// // solicitar al cliente agregar producto/s para calcular monto total de la compra
// let precioCuchillo = parseFloat(prompt("ingrese precio del primer cuchillo"));

// let precioCuchillo2 = parseFloat(prompt("ingrese precio del segundo cuchillo"));

// function sumarProducto(precioCuchillo, precioCuchillo2) {
//   let precioTotal = precioCuchillo + precioCuchillo2;
//   return precioTotal;
// }
// console.log(sumarProducto(precioCuchillo, precioCuchillo2));

// //costo total
// precioTotal = sumarProducto(precioCuchillo, precioCuchillo2);
// let envio = 500;
// function costoTotal(precioTotal, envio) {
//   let totalCompra = precioTotal + envio;
//   return totalCompra;
// }
// console.log(costoTotal(precioTotal, envio));
// totalCompra = costoTotal(precioTotal, envio);
// alert("el total de la compra con el envio es de: " + totalCompra);

// const tiendaCuchillo = {
//   id: 1,
//   producto: "cuchillo asado",
//   Tipo: "asado",
//   precio: 5.476,
// };
// const array = [
//   tiendaCuchillo,
//   { id: 2, producto: "cuchillo alpaca", Tipo: "asado", precio: 2.476 },
// ];
// array.push({ id: 3, producto: "cuchillo ciervo", Tipo: "cocina", precio: 6.0 });
// array.push({
//   id: 4,
//   producto: "Cuchillos Artesanales Trenzado Alpaca Cincelado",
//   Tipo: "cocina",
//   precio: 3.5,
// });

// console.log(array);
// const filtrado = array.find(producto => producto.Tipo === "asado");
// console.log(filtrado);

// const carrito = [
//   { nombre: "cuchillo asado", precio: 5476 },
//   { nombre: "cuchillo alpaca", precio: 2476 },
//   { nombre: "cuchillo ciervo", precio: 6000 },
//   { nombre: "envio", precio: 500 },
// ];
// let totalCarrito = carrito.reduce((accum, producto) => {
//   return accum + producto.precio;
// }, 0);
// console.log(totalCarrito);
// // agregado productos
// let setParrillero = [
//  { nombre: "set asado x3 piezas", precio: 2500 },
//  { nombre: "set asado x5 piezas", precio: 4000 },
//  { nombre: "set asado x13 piezas", precio: 6000 },
//  ];
// for (setParrillero of setParrillero) {
// let contenedor = document.createElement("div");
//   contenedor.innerHTML = `<h3>Set de parrilla: ${setParrillero.nombre}</h3>
//   <p>precio: ${setParrillero.precio}</p>`;
//   document.body.appendChild(contenedor);
// }
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaProductos = document.querySelector("#lista-producto");
let articulosCarrito = [];

cargarEventListener();

function cargarEventListener() {
  listaProductos.addEventListener("click", agregarProducto);
  carrito.addEventListener("click", eliminarProducto);

  vaciarCarritoBtn.addEventListener("click", () => {
    agregarProducto = [];
    limpiarHtmal();
  });
}

function agregarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const productoSelecionado = e.target.paresntElement;
    leerDatosProducto(productoSelecionado);
  }
}
function eliminarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("borrar-producto")) {
    const cursoID = e.target.getAtributte("id");
    (articulosCarrito = articulosCarrito.filter(
      (producto) => cursoID.id !== cursoID
    )),
      carritoHtml();
  }
}

function leerDatosProducto(producto) {
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    nombre: producto.querySelector(".card-title").innertext,
    precio: producto.querySelector("h2").innertext,
    id: producto.querySelector(button).getAtributte(id),
    cantidad: 1,
  };
}
const existe = articulosCarrito.some(
  (producto) => curso.id === infoProducto.id
);
if (existe) {
  const producto = articulosCarrito.map((producto) => {
    if (curso.id === infoProducto.id) {
      curso.cantidad++;
      return producto;
    } else {
      return producto;
    }
  });
  articulosCarrito = [...producto];
} else {
  articulosCarrito = [...articulosCarrito, infoProducto];
}
carritoHtml();

function carritoHtml() {
  limpiarHtml();
  articulosCarrito.forEach((producto) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.cantidad}</td>
    <td> 
      <a href="" class="borrar-producto" id=${producto.id}<a>
      `;
    contenedorCarrito.appendChild(row);
  });
}

function limpiarHtml() {
  contenedorCarrito.innerHTML = "";
}
