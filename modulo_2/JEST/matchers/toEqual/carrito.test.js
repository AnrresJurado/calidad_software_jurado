// tests/matchers.test.js
const { crearProducto } = require('../toEqual/carrito');

test('crearProducto devuelve el objeto correcto', () => {
  const producto = crearProducto('Teclado', 89.99, 2);

  expect(producto).toEqual({
    nombre:   'Teclado',
    precio:   89.99,
    cantidad: 2,
    total:    179.98,
  });
});

test('toEqual con arrays', () => {
  const numeros = [1, 2, 3].map(n => n * 2);
  expect(numeros).toEqual([2, 4, 6]);
});

test('toEqual con arrays de objetos', () => {
  const usuarios = [
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Luis' },
  ];

  expect(usuarios).toEqual([
    { id: 1, nombre: 'Ana' },
    { id: 2, nombre: 'Luis' },
  ]);
});