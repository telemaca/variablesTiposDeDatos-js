// Días a segundos

// Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.

const dias = Number(prompt ("Ingrese una cantidad de días:"));
const resultado = dias * 24 * 60 * 60;

alert(`En ${dias} días hay ${resultado} segundos.`);