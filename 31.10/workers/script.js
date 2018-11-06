let w = new Worker('./worker.js');
}
w.postMessage('Hola la la!')
let numeros = [0,4,5,6,73,2,2,8,9,8,5,4,3,4,5,611,,2,3,4,4,4,5,6,6,6];
w.postMessage('arr')

w.onmessage = function (mess) {
    console.log(mess.data);
}