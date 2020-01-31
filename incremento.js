// Incremento

// Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).


let numeroBase = Number(prompt ("Ingrese el número base que será incrementado"))

let incremento = Number(prompt (`Ingrese el número por el que desea incrementar a ${numeroBase}`))

let resultado = numeroBase + incremento

alert(`Incremento 1) Total: ${resultado}`)

resultado += incremento

alert(`Incremento 2) Total: ${resultado}`)

resultado += incremento

alert(`Incremento 3) Total: ${resultado}`)

resultado += incremento

alert(`Incremento 4) Total: ${resultado}`)

resultado += incremento

alert(`Incremento 5) Total: ${resultado}`)