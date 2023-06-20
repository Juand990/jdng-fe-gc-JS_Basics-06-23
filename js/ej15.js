// 15. Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no 
// (un año es bisiesto si es divisible entre 4, pero no entre 100, 
// a menos que también sea divisible entre 400).

let numero = prompt("Introduce un año");

if (numero%4 == 0 || numero%400 == 0) {
    if (numero%100 == 0) {
        console.log("Año NO bisiesto");
    } else {
        console.log("Año bisiesto");        
    }
} else {
    console.log("Año NO bisiesto");
}

