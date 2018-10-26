//ES5
let Persona = function (id, nom, ed) {
    this.id = id;
    this.nombre = nom;
    this.edad = ed;

    this.showInfo = function () {
        return '[' + this.id + '] ' + this.nombre + ',' + this.edad;
    }

}
let ricardo = new Persona(1,'Ricardo',32);
console.log(ricardo);



//ricardo.id = 1;
//ricardo.nombre = 'Ricardo';
//ricardo.edad = 35;

//ES6