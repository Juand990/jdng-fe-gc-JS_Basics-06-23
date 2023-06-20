// 29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre
// en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una
// condición `if` y una variable contador.

let frase = prompt("Introduce una frase");
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == 'a'|frase[i] == 'e' | frase[i] == 'i'|frase[i] == 'o'|frase[i] == 'u') {
        contador++;
    }    
}
console.log("TOTAL vocales: "+contador);