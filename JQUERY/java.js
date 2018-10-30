console.log($('#holabtn').html());
//$: Idempotente el objeto resultante de ese objeto es del mismo tipo que el objeto inicial.

$('#holabtn').click(function () {
    alert("Hola La La!");
});

$('h1').html('Hola!!!!').click(function () {
    alert('jquery');
}).html('Otro titulo');

//lo que recibo del servidor
let amigos = [
    { name: 'Ricardo', email: 't@.es' },
    { name: 'Cristina', email: 't@.es' },
    { name: 'Carlos', email: 't@.es' },
    { name: 'Borja', email: 't@.es' },
];
$('#amigos').html(function (){
    let htmlAmigos;'';
    amigos.forEach(unAmigo =>{
        htmlAmigos +='<li>
        <div>${unAmigo.name}</div>
        <div>${unAmigo.email}</div>

        $('#Ricardo').click(function () {
            alert("Hola Ricardo");
        });
        
        $('Hola Ricardo').html('Hola!!!!').click(function () {
            alert('Hola Ricardo');
        }).html('Otro titulo');
        /////
        console.log($('#Cristina').html());
        
        $('#Cristina').click(function () {
            alert("Hola Cristina");
        });
        
        $('Cristina').html('Hola!!!!').click(function () {
            alert('Hola Cristina');
        }).html('Otro titulo');
        /////
        $('#Carlos').click(function () {
            alert("Hola Carlos");
        });
        
        $('Carlos').html('Hola!!!!').click(function () {
            alert('Hola Carlos');
        }).html('Otro titulo');
        /////
        $('#Borja').click(function () {
            alert("Hola Borja");
        });
        
        $('Borja').html('Hola!!!!').click(function () {
            alert('Hola Borja');
        }).html('Otro titulo');
        // $('#amigos').html('Estos son mis amigos'); en lugar de string devuelva funcion.
        
    )
    return htmlAmigos;
    })
console.log($('#Ricardo').html());


$('#amigos').html(function () {
    //return "Resultado de la función";
    let htmlAmigos = '';
    amigos.forEach(unAmigo => {
        htmlAmigos += '<li>${unAmigo.name}</li>';
    });

    return htmlAmigos;

});
$