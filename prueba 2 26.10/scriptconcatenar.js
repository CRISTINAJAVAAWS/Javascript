
console.log(concatenar('Hola', 'Mundo'));
//ES6:
//Let: Variables
//const:constantes
const concatenar= function(str1, str2) {
    return str1 + ' ' + str2;
}
//es una constante

console.log( concatenar2('Hola2', 'Mundo2') );


(function(texto){
    console.log(texto);
})('Hola mundo');
//anonima autoinvocada, ejecuta conforme esta difinda

//funciones maneras de definir; asignando funcion, anonimas autoinvocadas,