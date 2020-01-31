// Calculador gastos

// Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.

let dineroDisponible = Number(prompt(`¿Cuánto dinero tenés disponible?`))

const servicio1 = prompt (`¿Qué tenés que pagar?`)
const montoServicio1 = Number(prompt(`¿Cuánto tenés que pagar?`))

dineroDisponible -= montoServicio1
let serviciosPorPagar = 2

alert(`Te quedan $${dineroDisponible}.
Servicios por ingresar: ${serviciosPorPagar}`)

const servicio2 = prompt (`¿Qué tenés que pagar?`)
const montoServicio2 = Number(prompt(`¿Cuánto tenés que pagar?`))

dineroDisponible -= montoServicio2
serviciosPorPagar--

alert(`Te quedan $${dineroDisponible}.
Servicios por ingresar: ${serviciosPorPagar}`)

const servicio3 = prompt (`¿Qué tenés que pagar?`)
const montoServicio3 = Number(prompt(`¿Cuánto tenés que pagar?`))

dineroDisponible -= montoServicio3
serviciosPorPagar--
const totalAPagar = montoServicio1 + montoServicio2 + montoServicio3

alert(`Servicios a pagar:
- ${servicio1}: $${montoServicio1}
- ${servicio2}: $${montoServicio2}
- ${servicio3}: $${montoServicio3}
Total a pagar: $${totalAPagar}
Te quedarán $${dineroDisponible} en tu cuenta.`)