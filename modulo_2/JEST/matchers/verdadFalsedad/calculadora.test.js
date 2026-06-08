// tests/calculadora.test.js
const { sumar, restar, multiplicar, esPar, obtenerSaludo } = require('./calculadora');

// toBe compara con === — ideal para números, strings y booleanos

test('sumar 3 + 4 devuelve 7', () => {
  expect(sumar(3, 4)).toBe(7);
});

test('restar 10 - 6 devuelve 4', () => {
  expect(restar(10, 6)).toBe(4);
});

test('multiplicar 5 × 3 devuelve 15', () => {
  expect(multiplicar(5, 3)).toBe(15);
});

test('esPar devuelve true para números pares', () => {
  expect(esPar(8)).toBe(true);
  expect(esPar(0)).toBe(true);
});

test('esPar devuelve false para números impares', () => {
  expect(esPar(7)).toBe(false);
});

test('obtenerSaludo a las 9h devuelve Buenos días', () => {
  expect(obtenerSaludo(9)).toBe('Buenos días');
});

test('obtenerSaludo a las 15h devuelve Buenas tardes', () => {
  expect(obtenerSaludo(15)).toBe('Buenas tardes');
});

test('obtenerSaludo a las 22h devuelve Buenas noches', () => {
  expect(obtenerSaludo(22)).toBe('Buenas noches');
});