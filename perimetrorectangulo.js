// Perímetro de un rectángulo

// Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

const ancho = Number(prompt ("Ingrese el ancho del rectángulo:"));
const altura = Number(prompt ("Ingrese la altura del rectángulo:"));
const resultado = (ancho * 2) + (altura * 2);

alert(`El perímetro de tu rectángulo es ${resultado}.`);