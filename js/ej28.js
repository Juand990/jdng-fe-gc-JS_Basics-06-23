// 28. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola si ese número es primo o no utilizando un bucle `for`, una condición `if` y un
// contador de divisores.

let numero = prompt("Introduce un numero");
let contador = 0;
for (let i = 1; i <= numero; i++) {
    if (numero % i==0) {
        contador++;
    } 
}
if (contador == 2) {
    console.log("Numero primo");
} else {
    console.log("NO numero primo");
}
