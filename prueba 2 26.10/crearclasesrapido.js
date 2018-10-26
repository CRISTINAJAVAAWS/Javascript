//ES5

let Persona = function (id, nom, ed) {
    this.id = id;
    this.nombre = nom;
    this.edad = ed;

    this.showInfo = function () {
        return '[' + this.id + '] ' + this.nombre + ', ' + this.edad;
    }

}

let clase2 = [
    new Persona(1, 'Ricardo', 32),
    new Persona(245, 'Juana', 23),
    new Persona(456, 'Ramira', 101),
];

for (let index = 0; index < clase2.length; index++) {
    console.log(clase2[index].showInfo());
}




//ES6
class persona {
    constructor(id, nom, ed) {
        this.id = id;
        this.nombre = nom;
        this.edad = ed;
    }
    showInfo = function () {
        return '[' + this.id + '] ' + this.nombre + ', ' + this.edad;
    }
}
let clase2 = [
    new Persona(1, 'Ricardo', 32),
    new Persona(245, 'Juana', 23),
    new Persona(456, 'Ramira', 101),
];

for (let index = 0; index < clase2.length; index++) {
    console.log(clase2[index].showInfo());
}

