// 18. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola 
// la suma de todos los números naturales hasta ese número utilizando un bucle `do...while`

let numero = prompt("Introduce un numero");
let i=0;
let suma=0;
do {
    suma=suma+i;
    console.log(suma);
    i++;
} while (i<=numero);