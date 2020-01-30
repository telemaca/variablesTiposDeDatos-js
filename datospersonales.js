// Datos personales

// Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

const nombre = prompt ("Ingrese su nombre.")
const apellido = prompt ("Ingrese su apellido.")
const edad = prompt ("Ingrese su edad.")
const nacionalidad = prompt ("Ingrese su nacionalidad.")
const documento = prompt ("Ingrese su edad.")

alert(`Nuevo usuario agregado al sistema:
- Nombre completo: ${nombre} ${apellido} 
- Edad: ${edad}
- Nacionalidad: ${nacionalidad}
- Documento: ${documento}
`)