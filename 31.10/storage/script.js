let amigos = [
    {name:'Ricardo', email: 'rar@.es'},
    {name:'Pepa', email: 'lol@.es'},
    {name:'Puri', email: 'omg@.es'},
    {name:'Juanito', email: 'ionmw@.es'},
];

window.localStorage.setItem('palabra_almacenada','Valor de la pablabra')
window.localStorage.setItem('lista-amigos',JSON.stringify(amigos));