u1_name = "Ricardo";
u1_surname = "Ahumada";

u2_name = "Cristina";
u2_surname = "Barriga";

u3_name = "Paul";
u3_surname = "Garcia";

console.log(u1_name+' '+u1_surname);
console.log(u2_name+' '+u2_surname);
console.log(u3_name+' '+u3_surname);

//Si hago lo siguiente no hay que cambiar la acción, esto es una función y solo necesito modificar, y el resto del codigo lo dejo sin variar.
function generarNombreCompleto(unNombre, unApellido){
    let nombre_mod="*"+unNombre+"*";
    let app_mod="//"+unApellido+"//";
    return nombre_mod+" "+app_mod;
    //return "*"+unNombre+"*"+ " " + "//"+unApellido+"//";     Se puede poner así en vez de let nombre_mod...let app..
}
//Recomendable crear funciones puras. No acceden a variables globales.
//Es bueno que tengan un cuerpo y que tengan nombre las funciones
//Para que devuelva nombre y apellido se pone return y devuelve dos parametros concatenados.

console.log( generarNombreCompleto(u1_name, u1_surname) );
console.log( generarNombreCompleto(u2_name, u2_surname) );
console.log( generarNombreCompleto(u3_name, u3_surname) );
//Para separar parametros se usa la coma. (u1_name+" "+ u1_surname) asi no.
