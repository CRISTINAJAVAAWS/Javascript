//opNumArr(arr,'op)
//let arr=[2,4,6,8,9,];
//opNumArr(arr,´+´)=29
//Generar una función opNumArr(arr,op), tal que para un array (let arr=[2,4,6,8,9];) nos devuelva la operación "op" (+ - * /) sobre todos sus valores.
//*Ejemplo:*
//opNumArr(arr,’+’) -> 29 (edited)

Numero_1 = 4
Numero_2 = 8

function operarNumeros(num1, num2, op) {
if (op=='-') { return num1-num2; }
else if (op=='+') { return num1+num2; }
else if (op=='*') { return num1*num2; }
else if (op=='/') { return num1/num2; }
if(num2==0) {return 0;}
else {return num1 / num2;}
  }
  function(arrai, op)
for (let index = 2; index < array.length; index++) {
   
    
}
//TEST DRIVEN DEVELOPMENT TDD

console.log(operarNumeros(4, 8,'-')); //-4
console.log(operarNumeros(4, 8,'+')); //12
console.log(operarNumeros(4, 8,'*')); //32
console.log(operarNumeros(4, 8,'/')); //0.5
console.log(operarNumeros(343, 0,'/')); //0