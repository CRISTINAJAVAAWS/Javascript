let Cristina = {
    nombre: 'Cristina',
    apellido: 'Barriga',
    email: '@es',
    edad: 30,
    gustanvideojuegos: true,
    juegovideojuegos: false,

    saludar: function () {
        return "Hola, me llamo " + this.nombre + "; tengo " +
            this.edad + " años y juego videojuegos.";
    }
};

let Rocio = {
    nombre: 'Rocio',
    apellido: 'Martín',
    email: '@es',
    edad: 15,
    gustanvideojuegos: true,
    juegovideojuegos: false,

    saludar: function () {
        return "Hola, me llamo " + this.nombre + "; tengo " +
            this.edad + " años y juego videojuegos.";
    }
};

console.log(Cristina);
console.log("apellido:", Cristina.apellido);
console.log("gustanvideojuegos:", Cristina.gustanvideojuegos);
console.log( Cristina.saludar() );

console.log("apellido:", Rocio.apellido);
console.log("gustanvideojuegos:", Rocio.gustanvideojuegos);
