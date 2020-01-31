// Celsius a Fahrenheit

// Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit.


const celsius = Number(prompt ("Ingrese los grados Celsius que quiere convertir a Farenheit:"));

const resultado = ((9/5) * celsius) + 32;


alert(`${celsius} °C son ${resultado} °F.`);