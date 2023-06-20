// 9. Escribe un programa que solicite al usuario ingresar un número y determine si es positivo,
// negativo o cero.


let numero = prompt("Introduce un numero (positivo/negativo) o cero)");


if (numero == 0) {
    console.log("Es un cero.");
}else{
    if (numero > 0) {
        console.log("Es un numero positivo.");
    } else {
        console.log("Es un numero negativo.");
    }
}
