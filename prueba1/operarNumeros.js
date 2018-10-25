//operarNumeros (num1, num2,op)
//op=+-*/
//operar numeros si le paso 4,8,('-') deberia darme -4
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

//TEST DRIVEN DEVELOPMENT TDD

console.log(operarNumeros(4, 8,'-')); //-4
console.log(operarNumeros(4, 8,'+')); //12
console.log(operarNumeros(4, 8,'*')); //32
console.log(operarNumeros(4, 8,'/')); //0.5
console.log(operarNumeros(343, 0,'/')); //0
