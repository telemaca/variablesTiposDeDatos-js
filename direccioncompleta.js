// Dirección completa

// Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".

const calle = prompt ("Ingrese su calle.")
const numero = prompt ("Ingrese el número de calle.")
const departamento = prompt ("Ingrese el número de departamento.")
const codigoPostal = prompt ("Ingrese el código postal.")
const ciudad = prompt ("Ingrese la ciudad.")
const pais = prompt ("Ingrese el país.")

alert(`La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}.`)