// 21. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola 
// la multiplicación de todos los números enteros positivos menores o iguales a ese número
// utilizando un bucle `do...while`.

let numero = prompt("Introduce un numero");
let i=0;

let multp=1;

do {
    if (i>0) {
        multp=multp*i;
        console.log(multp);
    }    
    i++;
} while (i<=numero);