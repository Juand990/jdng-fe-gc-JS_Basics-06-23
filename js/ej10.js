// 10. Realiza un programa que solicite al usuario ingresar el día de la semana (como número del 1 al 7)
// y muestre en la consola el nombre del día correspondiente
// (por ejemplo, 1 corresponde a "Lunes", 2 corresponde a "Martes", etc.).

let dia = prompt("Introduce un numero entre 1 y 7");
// let dia = parseInt(prompt("Introduce un numero entre 1 y 7"));
switch (+dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sabado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("El dia introducido no corresponde con un dia de la semana.");
    break;
}
