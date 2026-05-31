const asignarVehiculo = require('./asignarVehiculo');

describe('Pruebas de asignación lógica de flota vehicular', () => {

    test('Debería asignar un Furgón Ligero para entregas pequeñas', () => {
        expect(asignarVehiculo(1200, 10)).toBe("Furgón Ligero Urbano");
    });

    test('Debería escalar a Camión Mediano si el peso supera las 5 toneladas', () => {
        expect(asignarVehiculo(6500, 25)).toBe("Camión Mediano Tipo Pesado");
    });

    test('Debería exigir un Tráiler si las dimensiones superan los límites estructurales', () => {
        expect(asignarVehiculo(25000, 90)).toBe("Requiere Tráiler Extrapesado");
    });

    test('Debería retornar error si los valores son cero o negativos', () => {
        expect(asignarVehiculo(0, 0)).toBe("Carga inválida");
    });
});