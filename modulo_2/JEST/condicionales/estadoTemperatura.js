function estadoTemperatura(grados) {
    if(!Number.isInteger(grados) || grados >= 30 )
        throw new TypeError('Grados invalidos');
    estado="Calor";
    if(grados >= 15 && grados < 30)
        estado="Templado";
    else if(grados <15){
        estado="Frio";
    }
    return estado;
}
module.exports = { estadoTemperatura };



