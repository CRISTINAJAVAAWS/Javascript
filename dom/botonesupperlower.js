document.getElementById("sentencebtn").onclick = function () {
    var parraf = document.getElementById("parr").innerHTML;
    let palabrasTransf = [];
    separat = parraf.split(" ");
 
    for (let index = 0; index < separat.length; index++) {
 
        palabrasTransf[index] = separat[index].toLowerCase().replace(separat[index].toLowerCase().charAt(0), separat[index].charAt(0).toUpperCase());
 
    }
    var palabrasTransfJunto = palabrasTransf.join(" ");
    // console.log(palabrasTransfJunto);
 
    document.getElementById("parr").innerHTML = palabrasTransfJunto;
 }
