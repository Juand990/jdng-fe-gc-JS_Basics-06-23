// 8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor de ellos.

let numeroUno = prompt("Introduce un numero");
let numeroDos = prompt("Introduce el segundo numero");
let numeroTres = prompt("Introduce el tercer numero");

let numeroMayor=0;

if (numeroUno > numeroDos && numeroUno > numeroTres) {    
    numeroMayor=numeroUno;
}else{
    if (numeroDos > numeroTres) {
        numeroMayor=numeroDos;
    }else{
        numeroMayor=numeroTres;
    }
}
console.log("El numero mayor es el "+numeroMayor);
