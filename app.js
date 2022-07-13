// solicitar el nombre al cliente
let ingresarNombre = prompt("ingresa su nombre o ESC para interrumpir");
let texto = " ";
while (ingresarNombre != "ESC" && ingresarNombre != "esc") {
  texto += ingresarNombre + " ";
  ingresarNombre = prompt("ingrese su nombre o ESC para interrumpir");
}
alert("Hola" + texto + "Bienvenido a nuestra tienda");

//mostrar final del descuento
const finalDescuento = new Date("july 31, 2022");
alert("Descuento del 10% finaliza el " + finalDescuento.toLocaleString())

// solicitar al cliente agregar producto/s para calcular monto total de la compra
let precioCuchillo = parseFloat(prompt("ingrese precio del primer cuchillo"));

let precioCuchillo2 = parseFloat(prompt("ingrese precio del segundo cuchillo"));

function sumarProducto(precioCuchillo, precioCuchillo2) {
  let precioTotal = precioCuchillo + precioCuchillo2;
  return precioTotal;
}
console.log(sumarProducto(precioCuchillo, precioCuchillo2));

//costo total
precioTotal = (sumarProducto(precioCuchillo, precioCuchillo2));
let envio = 500;
function costoTotal(precioTotal, envio) {
  let totalCompra = precioTotal + envio;
  return totalCompra;
}
console.log(costoTotal(precioTotal, envio));
totalCompra = (costoTotal(precioTotal, envio));
alert("el total de la compra con el envio es de: " +totalCompra);

const tiendaCuchillo = {id:1, producto: "cuchillo asado", Tipo: "asado", precio: "5.476"};
const array =[tiendaCuchillo, {id: 2, producto: "cuchillo alpaca", Tipo: "asado" , precio: "2.476"}];
array.push({id:3, producto: "cuchillo ciervo", Tipo: "cocina", precio: "6.000"});
array.push({id:4, producto: "Cuchillos Artesanales Trenzado Alpaca Cincelado", Tipo: "cocina", precio: "3.500"});

console.log(array)
const filtrado = tiendaCuchillo.find((producto) => producto.Tipo === "asado");
console.log(filtrado);

const carrito = [
  {nombre:"cuchillo asado", precio: 5476},
  {nombre: "cuchillo alpaca", precio: 2476},
  {nombre: "cuchillo ciervo", precio: 6000},
  {nombre:"envio", precio: 500}
];
let totalCarrito = carrito.reduce((accum, producto) => {
  return accum + producto.precio;
}, 0);
console.log(totalCarrito)

