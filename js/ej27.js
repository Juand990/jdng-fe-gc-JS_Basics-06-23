// 27. Crea un programa que solicite al usuario ingresar un número y luego calcule la suma de
// todos los números impares desde 1 hasta ese número utilizando un bucle `while` y una
// condición `if`.

let numero = prompt("Introduce un numero");
let i=1;
let suma=0;
while (i<=numero) {
    if (i%2==1) {
        suma=suma+i;        
    }
    i++;
}
console.log(suma);