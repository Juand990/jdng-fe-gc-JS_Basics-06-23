// 32. Escribe un programa que solicite al usuario ingresar un número y luego calcule el factorial
// de ese número utilizando un bucle `for`, una condición `if` y una variable acumuladora.

let numero = prompt("Introduce un numero");
let mult = 1;

for (let i = 1; i <= numero; i++) {
    mult=mult*i;    
}
console.log("Factorial de "+numero+" es: "+mult);

