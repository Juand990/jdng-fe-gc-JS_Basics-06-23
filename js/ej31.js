// 31. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
// consola todos los números primos desde 1 hasta ese número utilizando un bucle `for`, una
// condición `if` y una función auxiliar para verificar si un número es primo.

let numero = prompt("Introduce un numero");
let primos = "";
let contador = 0;
for (let i = 1; i <= numero; i++) {   
    for (let j = 1; j <= i; j++) {
        if (i % j==0) {
            contador++;
        } 
    }
    if (contador==2) {
        primos=primos+i+" ";        
    }       
    contador = 0;
}
console.log("Total de Primos: "+primos);