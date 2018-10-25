u1_name = "Ricardo";
u1_surname = "Ahumada";

u2_name = "Cristina";
u2_surname = "Barriga";

u3_name = "Paul";
u3_surname = "Garcia";

console.log(u1_name+' '+u1_surname);
console.log(u2_name+' '+u2_surname);
console.log(u3_name+' '+u3_surname);

function generarNombreCompleto(unNombre,unApellido){
    return   unNombre+" "+unApellido;
}
//Es bueno que tengan un cuerpo y que tengan nombre las funciones
//Para que devuelva nombre y apellido se pone return y devuelve dos parametros concatenados.
