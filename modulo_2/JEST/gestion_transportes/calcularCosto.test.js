const calcularCosto = require('./calcularCosto');

describe('Pruebas para el cálculo de costos de envío', () => {
    
    test('Debería calcular el costo correctamente para un viaje local corto', () => {
        expect(calcularCosto(10, 2, false)).toBe(55.00);
    });

    test('Debería incluir el impuesto si el viaje es interprovincial', () => {
        expect(calcularCosto(100, 5, true)).toBe(370.00);
    });

    test('Debería lanzar un error si se ingresan valores negativos o cero', () => {
        expect(() => calcularCosto(-10, 5, false)).toThrow("La distancia y el peso deben ser mayores a cero.");
        expect(() => calcularCosto(50, 0, false)).toThrow("La distancia y el peso deben ser mayores a cero.");
    });
});