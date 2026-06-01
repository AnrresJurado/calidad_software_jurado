const { crearAlumno } = require('./alumnos');

describe('Pruebas para crearAlumno', () => {
  test('Happy path: Retorna el objeto alumno correctamente', () => {
    expect(crearAlumno('Ana', 20)).toEqual({ nombre: 'Ana', edad: 20 }); 
  });

  test('Sad path: Lanzar error por datos inválidos', () => {
    expect(() => crearAlumno('', 20)).toThrow('Nombre Invalido');
    expect(() => crearAlumno('Maria', -20)).toThrow('Edad invalida');
  });
});