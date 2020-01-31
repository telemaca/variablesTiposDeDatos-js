// Tiempo de viaje

// Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).


const kms = Number(prompt ("¿Cuántos kilómetros vas a recorrer?"));
const minutosPie = (60 * kms) / 5;
const minutosBici = (60 * kms) / 15;
const minutosAuto = (60 * kms) / 80;

alert(`Vas a tardar:
- ${minutosPie} minuto(s) si vas a pie
- ${minutosBici} minuto(s) si vas en bici
- ${minutosAuto} minuto(s) si vas en auto.`);