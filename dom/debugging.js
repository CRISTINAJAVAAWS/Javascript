function opNumArr(arr, op) {
    let resultado;

    if (op == '+') resultado = 0;
    else if (op == '-') resultado = (arr && arr[0]) ? arr[0] : 0;
    else if (op == '*') resultado = 1;
    else if (op == '/') resultado = (arr && arr[0]) ? arr[0] : 0;
    idx_inicio = 1;

    for (let i = idx_inicio; i < arr.length; i++) {
        resultado = operarNumeros(resultado, arr[i], op);
    }

    return resultado;

}

//opcion 1



function opNumArr(arr, op) {
    let resultado;

    if (op == '+') resultado = 0;
    else if (op == '-') {
       // resultado = (arr && arr[0]) ? arr[0] : 0;
    }
    else if (op == '*') resultado = 1;
    else if (op == '/')
    //resultado = (arr && arr[0])?arr[0]:0;
} 
    |
 
    for (let i = 0; i < arr.length; i++) {
    if (op == '-' || op == '/') && i == 0) resultado = arr[0]
        else resultado = operarNumeros(resultado, arr[i], op);
}

return resultado;
 }

//opcion 2

function opNumArr(arr, op) {
    let resultado;
 
    if (op == '+')  resultado = 0;
    else if (op == '-')  {
        // resultado = (arr && arr[0])?arr[0]:0;
    }
    else if (op == '*') resultado = 1;
    else if (op == '/') {
        // resultado = (arr && arr[0])?arr[0]:0;
    }
 
    for (let i = 0; i < arr.length; i++) {
        if ( (op == '-' || op == '/') && i==0) resultado= arr[0];
        else resultado = operarNumeros(resultado , arr[i],op);
    }
 
    return resultado;
 }
 
 
 
 
 
 
 
 function opNumArr(arr, op) {
    let resultado;
 
    if (op == '+')  resultado = 0;
    else if (op == '-')  {
        // resultado = (arr && arr[0])?arr[0]:0;
    }
    else if (op == '*') resultado = 1;
    else if (op == '/') {
        // resultado = (arr && arr[0])?arr[0]:0;
    }
 
    for (let i = 0; i < arr.length; i++) {
        if ( (op == '-' || op == '/') && i==0) resultado= arr[0];
        else resultado = operarNumeros(resultado , arr[i],op);
    }
 
    return resultado;
 }
 
 
 
 
 
 
 
  