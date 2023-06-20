// 25. Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola
// cada palabra de la frase en una línea diferente utilizando un bucle `for...of`

let frase = prompt("Introduce una frase");
let final=0;
let fraseMostrar = "";
for (const iterator of frase) {
    final++; 
  if (iterator != " ") {
    fraseMostrar = fraseMostrar + iterator;  
     
  }else{
    console.log(fraseMostrar);
    fraseMostrar = ""
  }  
  if (final == frase.length) {
    console.log(fraseMostrar);
  }
}
