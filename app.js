
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-productos");
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
  listaCursos.addEventListener("click", agregarProducto);

  carrito.addEventListener("click", eliminarProducto);

  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = [];

    limpiarHTML();
  });
}
function agregarProducto(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const productoSeleccionado = e.target.parentElement;
    leerDatosCurso(productoSeleccionado);
  }
}

function eliminarProducto(e) {
  e.preventDefault();
  if (e.target.classList.contains("borrar-producto")) {
    const cursoID = e.target.getAttribute("id");
    articulosCarrito = articulosCarrito.filter((producto) => producto.id !== productoID);

    carritoHTML();
  }
}
function leerDatosCurso(producto) {
  const infoProducto = {
    imagen: producto.querySelector("img").src,
    titulo: producto.querySelector(".card-title").innerText,
    precio: producto.querySelector("h6").innerText,
    id: producto.querySelector("a").getAttribute("id"),
    cantidad: 1,
  };
  const existe = articulosCarrito.some((producto) => producto.id === infoProducto.id);
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
  carritoHTML();
}
function carritoHTML() {

  limpiarHTML();
  articulosCarrito.forEach((producto) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${producto.titulo}</td>
    <td>${producto.precio}</td>
    <td>${producto.cantidad}</td>
    <td>
    <a href="" class="borrar-producto" id="${producto.id}">x</a>
    </td>`;
    contenedorCarrito.appendChild(row);
  });
}
function limpiarHTML() {
  contenedorCarrito.innerHTML = "";
}
