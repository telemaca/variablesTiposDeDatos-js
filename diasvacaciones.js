// Días de vacaciones

// Crear un programa que pida al usuario ingresar cuántos años lleva trabajando en una empresa, y le devuelva la cantidad de días de vacaciones al año que le corresponden, siendo 15 días hasta 3 años y 2 días más por cada año extra (p. ej.: a 6 años corresponden 21 días).

const añosTrabajados = Number(prompt (`Ingrese cuántos años lleva trabajados:`))

const vacaciones = ((añosTrabajados - 3) * 2) + 15

if (añosTrabajados < 4){
    alert(`Le corresponden 15 días de vacaciones.`)
}

else {
    alert(`Le corresponden ${vacaciones} días de vacaciones.`)
}