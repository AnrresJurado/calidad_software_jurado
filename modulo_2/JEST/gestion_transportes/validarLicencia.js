function validarLicencia(tipoLicencia, aniosVigencia, puntos) {
    const licenciasPermitidas = ['C', 'D', 'E'];
    
    if (!licenciasPermitidas.includes(tipoLicencia.toUpperCase())) {
        return false; // No es una licencia profesional válida para transporte pesado
    }

    if (aniosVigencia <= 0) {
        return false; // Licencia caducada
    }

    if (puntos < 15) {
        return false; // No apto por pérdida crítica de puntos (Base original: 30)
    }

    return true;
}

module.exports = validarLicencia;