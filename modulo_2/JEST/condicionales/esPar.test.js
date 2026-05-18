const { esPar } = require('./esPar.js');

describe('esPar', () => {
  test('Happy path: 8 es par', () => {
    expect(esPar(8)).toBe(true);
  })

  test('Happy path: 7 es impar', () => {
    expect(esPar(7)).toBe(false);
  })

  test('Sad path: n debe ser entero', () => {
    expect(() => esPar(3.5)).toThrow('El número debe ser un entero');
    expect(() => esPar('10')).toThrow('El número debe ser un entero');
  });
});