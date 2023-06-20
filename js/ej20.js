// 20. Crea un programa que solicite al usuario ingresar un número y muestre en la 
// consola todos los números pares desde ese número hasta 0 utilizando un bucle `while`.

let numero = prompt("Introduce un numero");
let i=numero;

while (i>=0) {
    if (i%2==0) {
        console.log(i);
    }
    i--;
}