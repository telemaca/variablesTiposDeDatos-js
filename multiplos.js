// Múltiplos

// Crear un programa que pida al usuario un número, luego otro y mostrar en un mensaje si el primer valor es múltiplo del segundo. INVESTIGAR EL OPERADOR MÓDULO O DE RESTO % PARA HACERLO


const numero1 = Number(prompt ("Ingrese un número:"));
const numero2 = Number(prompt ("Ingrese otro número:"));

if (numero1 % numero2 == 0) {
alert(`${numero1} es múltiplo de ${numero2}.`);
}

else {
    alert(`${numero1} es no múltiplo de ${numero2}.`);
}