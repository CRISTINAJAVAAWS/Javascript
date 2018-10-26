//ANIDAMIENTO DE FUNCIONES


function concatena(a,b){return a+' '+b};
concatena('hola','Ric');
function concatenaABC(a,b,c){return a+' '+b+' '+c;}
concatenaABC('Hola', 'Ricardo', 'Como estas');
function concatenaABC(a,b,c){return concatena(a,b)+' '+c;}
function concatenaABC(a,b,c){return concatena(concatena(a,b),c);}