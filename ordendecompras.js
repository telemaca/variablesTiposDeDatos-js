// Orden de compras

// Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.

const zapatillasUnidades = Number(prompt(`¿Cuántos pares de zapatillas querés?`))
const zapatillas = zapatillasUnidades * 3500

const remeraUnidades = Number(prompt(`¿Cuántas remeras querés?`))
const remera = remeraUnidades * 1200

const pantalonUnidades = Number(prompt(`¿Cuántos pantalones querés?`))
const pantalon = pantalonUnidades * 690

const total = zapatillas + remera + pantalon

const cuotas = Number(prompt(`El monto total de la compra es $${total}.
¿En cuántas cuotas querés pagar?`))

const cuotasMonto = total / cuotas

alert(`Detalle de tu compra:
-${zapatillasUnidades} zapatilla(s): $${zapatillas}
-${remeraUnidades} remera(s): $${remera}
-${pantalonUnidades} pantalón(es): $${pantalon}
Total: $${total}, en $${cuotas} cuotas de $${cuotasMonto}.`)