// Área de un triangulo

// Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

const base = Number(prompt ("Ingrese la base del triángulo:"));
const altura = Number(prompt ("Ingrese la altura del triángulo:"));
const resultado = (base * altura) / 2;

alert(`El área de tu triángulo es ${resultado}.`);