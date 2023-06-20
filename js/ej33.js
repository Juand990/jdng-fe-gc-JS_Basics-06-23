// 33. Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la
// consola la palabra invertida utilizando un bucle `while`, una condición `if` y una variable
// acumuladora.

let palabra = prompt("Introduce una palabra");
let fraseInvertida='';
let i=palabra.length-1;

while (i>=0) {
    fraseInvertida=fraseInvertida+palabra[i]    
    i--;
}
console.log(fraseInvertida);