//EJERCICIO PRIMERA LETRA EN MAYÚSCULA DE CADA PALABRA EN PÁRRAFO
//Para un texto cualquier, haz que la primera letra de cada palabra se ponga en mayúsculas, y el resto en minúsculas.
//TIPS:
//Los textos o strings en javascript son objetos y tienen métodos. Puedes revisar estos métodos en el sitio de MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
//Para solucionar este problema una manera es usando el método substring (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
//Este método permite extraer un parte del string basados en los índices de  cada caracter.
//Por ejemplo let txt='hello'; txt.substring(0,1); dará como resultado 'h'
//txt.substring(0,2); dará como resultado 'he'
//Debes usar este método con cada palabra para convertir el primer caracter o substring en mayúscula y concatenarlo con el resto del texto en minúsculas.
//Guarda este proceso en una función!!
//Para fraccionar un párrafo por espacios tienes el método split (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
//split separa un string según el texto que le pases y genera un array
//Por ejemplo. a.split('e) --> ['h','llo']
//Usa split para separa el párrafo por sus espacios. Toma el array generado, recórrelo con un for y aplica la función anterior y ve guardando el resultado en otro array.
//Finalemente recorre el array anterior y concatena sus elementos, introduciendo un espacio entre medio.

document.getElementById("sentencebtn").onclick = function () {
    var parraf = document.getElementById("parr").innerHTML;
    let palabrasTransf = [];
    separat = parraf.split(" ");
 
    for (let index = 0; index < separat.length; index++) {
 
        palabrasTransf[index] = separat[index].toLowerCase().replace(separat[index].toLowerCase().charAt(0), separat[index].charAt(0).toUpperCase());
 
    }
    var palabrasTransfJunto = palabrasTransf.join(" ");
    // console.log(palabrasTransfJunto);
 
    document.getElementById("parr").innerHTML = palabrasTransfJunto;
 }


