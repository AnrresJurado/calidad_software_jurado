function esPar(n) {
  if(!Number.isInteger(n)) 
    throw new TypeError('El número debe ser un entero');
  return n % 2 === 0;
}
module.exports = { esPar };