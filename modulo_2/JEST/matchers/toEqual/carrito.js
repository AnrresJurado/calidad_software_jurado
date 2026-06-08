// src/carrito.js
function crearProducto(nombre, precio, cantidad) {
  return { nombre, precio, cantidad, total: precio * cantidad };
}
module.exports = { crearProducto };

