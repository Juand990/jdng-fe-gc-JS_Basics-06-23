// 24. Realiza un programa que solicite al usuario ingresar un número y muestre 
// en la consola la suma de todos los dígitos del número utilizando un bucle `while`.

let numero = prompt("Introduce un numero");
let suma=0;
let i=0;

while (i<numero.length) {
    suma=suma+(+numero[i]);
    console.log(suma);
    i++;
}


