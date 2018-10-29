let saludaBtns = document.getElementsByClassName('saluda');
let saludaNames = document.getElementsByClassName('amigoname');

console.log(saludaBtns);
console.log(saludaNames);


for (let index = 0; index < saludaBtns.length; index++) {
    saludaBtns[index].onclick = function () {
        let name = this.getAttribute('data-name');
        let idp = this.getAttribute('data-idp');
        let infop = document.getElementById(idp).innerHTML;
        alert(infop);
    }
}

let borraBtns = document.getElementsByClassName('borra');
for (let index = 0; index < borraBtns.length; index++) {
    borraBtns[index].onclick = function () {
        let elidLI = this.getAttribute('data-li');
        removeElement(elidLI);
    }

    function removeElement(id) {
        var elem = document.getElementById(id);
        return elem.parentNode.removeChild(elem);
    }
}