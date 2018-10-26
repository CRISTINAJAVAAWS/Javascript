

//gestionar la clase. Persona, id, nombre, edad. Lista de datos de clase:[234]. Ricardo 41. dentro de un array, y al final un loop


let clase = [
    { id: 1, nombre: 'Pepe', edad: 34, showInfo:function(){
        return '[' + this.id + '] '+this.nombre+', '+this.edad;
    } },
    { id: 245, nombre: 'Juana', edad: 23, showInfo:function(){
        return '[' + this.id + '] '+this.nombre+', '+this.edad;
    } },
    { id: 12, nombre: 'Pedro', edad: 30, showInfo:function(){
        return '[' + this.id + '] '+this.nombre+', '+this.edad;
    } },
    
    function(){
        return '[' + this.id + '] '+this.nombre+', '+this.edad;
    } },
];
console.log
for (let index = 0; index < clase.length; index++) {
    console.log( clase[index].showInfo() );
} 


