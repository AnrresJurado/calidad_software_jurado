function calcularCosto(distanciaKm, pesoToneladas, esInterprovincial) {
    if (distanciaKm <= 0 || pesoToneladas <= 0) {
        throw new Error("La distancia y el peso deben ser mayores a cero.");
    }

    const TARIFA_BASE_KM = 2.50; // $2.50 por kilómetro
    const PLUS_PESO_TON = 15.00; // $15.00 extra por cada tonelada
    const IMPUESTO_RUTAS = 45.00; // Tarifa fija por cruzar provincias

    let costoTotal = (distanciaKm * TARIFA_BASE_KM) + (pesoToneladas * PLUS_PESO_TON);

    if (esInterprovincial) {
        costoTotal += IMPUESTO_RUTAS;
    }

    return parseFloat(costoTotal.toFixed(2));
}

module.exports = calcularCosto;