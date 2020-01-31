// Porcentaje

// Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.

const numero = Number(prompt ("Ingrese el número:"));
const porcentaje = Number(prompt (`Ingrese qué porcentaje de ${numero} quiere hallar:`));
const resultado = (numero * porcentaje) / 100;

alert(`El ${porcentaje}% de ${numero} es ${resultado}.`);