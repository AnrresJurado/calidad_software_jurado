const{ estadoTemperatura } = require('./estadoTemperatura');

describe('estadoTemperatura', () => {
  test('Happy path: 31 => Calor', () => {
    expect(estadoTemperatura(31)).toBe('Calor');
  })

  test('Happy path: 20 => Templado', () => {
    expect(estadoTemperatura(20)).toBe('Templado');
  })

  test('Happy path: 6 => Frio', () => {
    expect(estadoTemperatura(6)).toBe('Frio');
  })

  test('Sad path: grados invalidos', () => {
    expect(() => estadoTemperatura(-1)).toThrow('Grados invalidos');
    expect(() => estadoTemperatura('7')).toThrow('Grados invalidos');
    expect(() => estadoTemperatura(31)).toThrow('Grados invalidos');
    })
})

