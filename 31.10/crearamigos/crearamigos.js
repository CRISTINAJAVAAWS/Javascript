//hemos recibido lista de amigos y vamos a usar objetos.
//Amigos recibidos del servidor.
//Para cada uno de los amigos un for porque es un Array
let amigos=[
    {name:'Ricardo', email: 'rar@.es'},
    {name:'Pepa', email: 'lol@.es'},
    {name:'Puri', email: 'omg@.es'},
    {name:'Juanito', email: 'ionmw@.es'},
];

let listaUl=document.getElementById('listaAmigos');

for (let index = 0; index < amigos.length; index++) {
    listaUl.innerHTML += '<li>'+amigos[index].name+'</li>';
}
listaUl.innerHTML += `<li>
<span>${amigos[index].name}</span>
<span>${amigos[index].name}</span>
</li>`;

spa
//si metes html , el ordenador parsea le metes un <li> y te vale.
//span separacion <span> pero es mejor usar plantilas ES6. se usan comillas que son tildes.
//$ sintaxis plantillas javascript, valor dinamico valor de una vairable. El valor tiene que reemplazar su valor.