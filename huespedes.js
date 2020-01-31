// Cantidad de huéspedes

// Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

let habitacion2 = Number(prompt(`Habitaciones para 2 personas:`))
habitacion2 *= 2
let habitacion3 = Number(prompt(`Habitaciones para 3 personas:`))
habitacion3 *= 3
let habitacion4 = Number(prompt(`Habitaciones para 4 personas:`))
habitacion4 *= 4

const huespedes = habitacion2 + habitacion3 + habitacion4

alert(`La capacidad máxima del hotel es de ${huespedes} personas.`)