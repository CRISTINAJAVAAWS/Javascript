document.getElementById('accederbtn').onclick = (function (evnt) {
    console.log(evnt);
    evnt.preventDefault();

    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    });

    let formValid = document.getElementById('loginform').checkValidity();

    if (formValid) {
        //enviar
        $.ajax({
            method: "POST",
            //
            
            url: "http://www.mocky.io/v2/5bd9778e2f00002a0006d152",// CASO FALSE
            url: "http://www.mocky.io/v2/5bd9732b2f00007c0006d122", //caso true
            data: { 
                username: document.getElementById('username').value, 
                password: document.getElementById('password').value 
            }
        }).done(function (data) {
        console.log(data);
        if(data.result){
            window.location.href='dashboard.html';
        }else{
            document.getElementById('mensaje').classList.remove('esconder');
        }
    });
    
    } else {
        //mensaje de error.
        //mostrar mensaje y no enviar.
        //DOCUMENT.GETELEMENTBYID('MENSAJE').innerhtml='datos incorrectos

        if (!document.getElementById('username').checkValidity()) {
            document.getElementById('errorusername').classList.remove('esconder');
        }
        if (!document.getElementById('password').checkValidity()) {
            document.getElementById('errorpassword').classList.remove('esconder');
        }
    }

});
