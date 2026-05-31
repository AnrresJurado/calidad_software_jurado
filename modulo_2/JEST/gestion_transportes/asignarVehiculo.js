function asignarVehiculo(pesoKg, volumenM3) {
    if (pesoKg > 20000 || volumenM3 > 80) {
        return "Requiere Tráiler Extrapesado";
    } 
    
    if (pesoKg > 5000 || volumenM3 > 30) {
        return "Camión Mediano Tipo Pesado";
    } 
    
    if (pesoKg > 0 && volumenM3 > 0) {
        return "Furgón Ligero Urbano";
    }

    return "Carga inválida";
}

module.exports = asignarVehiculo;