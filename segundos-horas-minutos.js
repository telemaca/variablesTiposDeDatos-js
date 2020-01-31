// Segundos a horas, minutos y segundos

// Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo)

const segundosIniciales = Number(prompt(`Ingrese la cantidad de segundos que quiere convertir a horas, minutos y segundos:`))

const segundos = segundosIniciales % 60
const minutos = (segundosIniciales - segundos) / 60 
const minutosRestantes = minutos % 60
const horas = (minutos - minutosRestantes) / 60 

alert(`${segundosIniciales} segundos son ${horas} hora(s), ${minutosRestantes} minuto(s) y ${segundos} segundo(s).`)