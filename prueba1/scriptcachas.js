var esta_cachas = false;

var peso = 80;
var altura = 170;

if(peso <= altura-100 -20){
    esta_cachas=false;
    console.log('come mas!!');
}else if(peso <= altura-100){
    esta_cachas=true;
    console.log('Que cachas estas!!');
}
else{
    esta_cachas=false;
    console.log('ponte a hacer ejercicios vago, te sobran:',peso-(altura-100));
}