
        //DEF MASCOTITAS=ARRAY VACIO[] como almacenar mil nombres de mascotitas[0]='perrito 1';
        //mascotitas[1]='perrito1'; habria que escribirlo mil veces mascotita[0]
    //for i=0 hasta i<1000;i++ mascotitas[999] puedes sustituir por [i]='perrito'+(i+1);

        let mascotas = []
        console.log(mascotas);

        for (let index = 0; index < 1000; index++) {
            mascotas[index]= 'perrito'+(index +1);
            console.log (mascotas[index])
}
        
        for (let index = 0; index < 1000; index++) {
        console.log ("La mascota "+index+" se llama "+mascotas[index]); 
    }
    
    //modificacion perritos como hermanos: perrito i hermano del perrito i-1 excepto perrito 1 que no tiene hermanos.
 
for (let index = 0; index <20; index++) {
    if(index == 0) {

    console.log ('el perro' , (index+1), 'no tiene hermanos')
    } else {
    console.log('perrito', (index+1), 'es hermano de',(index - 1))

   }
}