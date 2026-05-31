const validarLicencia = require('./validarLicencia');

describe('Pruebas de validación de licencias para choferes', () => {

    test('Debería aprobar un chofer con licencia tipo E vigente y puntos completos', () => {
        expect(validarLicencia('E', 3, 30)).toBe(true);
    });

    test('Debería rechazar licencias no profesionales (ej. Tipo B)', () => {
        expect(validarLicencia('B', 4, 30)).toBe(false);
    });

    test('Debería rechazar si la licencia está caducada (años de vigencia 0 o menos)', () => {
        expect(validarLicencia('D', 0, 25)).toBe(false);
    });

    test('Debería rechazar si el chofer tiene menos de 15 puntos en su licencia', () => {
        expect(validarLicencia('C', 2, 12)).toBe(false);
    });
});