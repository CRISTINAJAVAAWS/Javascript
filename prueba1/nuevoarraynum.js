var mis_numeros_hex = [1,2,3,4,5,6,7,8,9,'A','B','C'];
console.log(mis_numeros_hex);
for (let index = 0; index < mis_numeros_hex.length; index=index+2) {
   
    console.log('El valor en el indice: ',index,'es', mis_numeros_hex[index]);
    
}
mis_numeros_hex[3]=45;
mis_numeros_hex[9]='XX';
console.log(mis_numeros_hex);

for (let index = 0; index < mis_numeros_hex.length; index++) {
    console.log('El valor en el indice:',index,'es',mis_numeros_hex[index]);

for (let index = 0; index < 20; index++) {
        console.log('Hola');
}