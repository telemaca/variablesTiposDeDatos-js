// Duración vuelo

// Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

const escala1 = prompt ("¿Cuál es la primera escala?");
const escala1Duracion = Number(prompt ("¿Cuánto tardás en llegar (en horas)?"));
const escala2 = prompt ("¿Cuál es la segunda escala?");
const escala2Duracion = Number(prompt ("¿Cuánto tardás en llegar (en horas)?"));
const escala3 = prompt ("¿Cuál es la tercera escala?");
const escala3Duracion = Number(prompt ("¿Cuánto tardás en llegar (en horas)?"));
const resultado = escala1Duracion + escala2Duracion + escala3Duracion

alert(`Itinerario de tu vuelo:
- ${escala1},  ${escala1Duracion} horas
- ${escala2},  ${escala2Duracion} horas
- ${escala3},  ${escala3Duracion} horas
- Total del vuelo: ${resultado} horas. `);