//opNumArr(arr,'op)
//let arr=[1,2,3,4];
//opNumArr(arr,´+´)=29
//Generar una función opNumArr(arr,op), tal que para un array (let arr=[2,4,6,8,9];) nos devuelva la operación "op" (+ - * /) sobre todos sus valores.
//*Ejemplo:*
//opNumArr(arr,’+’) -> 29 (edited) si opNumAqq Si opp=='+' devuelve resultado.
//mientras,while (i)sea menor que la cantidad de elementos el resultado tiene que ser igual a 0 igual al indice mas resultado
//i++ incrementa se pude hacer con o=0;i<num elems;i++ resultado=arr[i]+resultado;
//hay que poner resultado igual a 0 muy importante.


function operarNumeros(num1, num2, op) {
  if (op == '-') { return num1 - num2; }
  else if (op == '+') { return num1 + num2; }
  else if (op == '*') { return num1 * num2; }
  else if (op == '/') {
      if(num2==0) {return 0;}
      else {return num1 / num2;}
  }
}
console.log(operarNumeros(4, 8, '-')); //-4
console.log(operarNumeros(4, 8, '+')); //12
console.log(operarNumeros(4, 8, '*')); //32
console.log(operarNumeros(4, 8, '/')); //0.5
console.log(operarNumeros(343, 0, '/')); //0
function opNumArr(arr,op){
  let resultado;
  if(op=='+'){
      resultado=0;
      for (let index = 0; index < arr.length; index++) {
          resultado += arr[index];
      }
  }else if(op=='-'){
      resultado=0;
      for (let index = 0; index < arr.length; index++) {
          if(index==0) resultado=arr[index];
          else resultado -= arr[index];
      }
  }else if(op=='*'){
      resultado=1;
      for (let index = 0; index < arr.length; index++) {
          resultado *= arr[index];
      }
  }else if(op=='/'){
      for (let index = 0; index < arr.length; index++) {
          if(index==0) resultado=arr[index];
          else resultado /= arr[index];
      }
  }
  return resultado;
}
let arr_nums=[1,2,3,4];
console.log("RESULTADOS ARRAY");
console.log(opNumArr(arr_nums, '+')); //10
console.log(opNumArr(arr_nums, '-')); //-8
console.log(opNumArr(arr_nums, '*')); //24
console.log(opNumArr(arr_nums, '/')); //0.0416666

