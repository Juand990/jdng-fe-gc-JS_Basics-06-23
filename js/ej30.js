// 30. Crea un programa que solicite al usuario ingresar un número y luego determine si es un
// número perfecto (la suma de sus divisores propios es igual al número) utilizando un bucle
// `while`, una condición `if` y una variable acumuladora.

let numero = prompt("Introduce un numero");
let suma = 0;
let i=0;

while (i<numero) {
    if (numero%i==0) {
        suma=suma+i;
    }
    i++;    
}
if (suma==numero) {
    console.log("Numero PERFECTO");
}else{
    console.log("Numero NO perfecto");
}

