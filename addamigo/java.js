function generarHtml(paramElemId, paramAmigos) {
    $('#amigos')
    $('#amigos').html(function () {
        let htmlAmigos = '';
        data.forEach(unamigo => {
            htmlAmigos += `<li>
            <div>${unAmigo.name}</div>
            <div>${unAmigo.email}</div>
            <button class='saludabtn' data-value='${unAmigo.name}'>saludar</li>`;
        });
        return htmlamigos;
    });

    $('.saludabtn').click(function () {
        alert('hola ' + $(this).attr('data-value') + '!!');
    });

    $('#cargarbtn').click(function () {
        $.ajax({
            url: "http://www.mocky.io/v2/5bd86c1d310000e62f474e50",

        }).done(function (data) {
            console.log(data);

            //inyectar amigosfromserver en el html

            ////////////////////////////////////////////////
            generarHtml('#amigosface').click(function () {
                $('#amigos').html(function () {
                    let htmlAmigos = '';
                    data.forEach(unamigo => {
                        htmlAmigos += `<li>
                <div>${unAmigo.name}</div>
                <div>${unAmigo.email}</div>
                <button class='saludabtn' data-value='${unAmigo.name}'>saludar</li>`;

                        ///////////////////////////////////////////////////////////////
                        function generarHtml(paramElemId, paramAmigos)
                        $('#cargarbtnface').click(function () {
                            $.ajax({
                                url: "http://www.mocky.io/v2/5bd86c1d310000e62f474e50",

                            }).done(function (data) {
                                console.log(data);

                                //inyectar amigosfromserver en el html

                                $('#amigosface').html(function () {
                                    let htmlamigos = '';
                                    data.forEach(unamigo => {
                                        htmlamigos += `<li>
                <div>${unamigo.name}</div>
                <div>${unamigo.email}</div>
                <button class='saludabtn' data-value='${unamigo.name}'>saludar</li>`;
                                    });
                                    return htmlamigos;
                                });

                                $('.saludabtn').click(function () {
                                    alert('hola ' + $(this).attr('data-value') + '!!');
                                });



                                ////////////////////////////////////////////////////
                                function generarHtml(paramElemId, paramAmigos)
                                $('#cargarbtnspoty').click(function () {
                                    $.ajax({
                                        url: "http://www.mocky.io/v2/5bd86c1d310000e62f474e50",

                                    }).done(function (data) {
                                        console.log(data);

                                        //inyectar amigosfromserver en el html

                                        $('#amigosspoty').html(function () {
                                            let htmlamigos = '';
                                            data.forEach(unamigo => {
                                                htmlamigos += `<li>
                <div>${unamigo.name}</div>
                <div>${unamigo.email}</div>
                <button class='saludabtn' data-value='${unamigo.name}'>saludar</li>`;
                                            });
                                            return htmlamigos;
                                        });

                                        $('.saludabtn').click(function () {
                                            alert('hola ' + $(this).attr('data-value') + '!!');
                                        });
                                    });
                                });

                                function generarHtml(paramElemId, paramAmigos) {
                                    $('#amigosface')
                                    $('#amigos').html(function () {
                                        let htmlAmigos = '';
                                        data.forEach(unamigo => {
                                            htmlAmigos += `<li>
                            <div>${unAmigo.name}</div>
                            <div>${unAmigo.email}</div>
                            <button class='saludabtn' data-value='${unAmigo.name}'>saludar</li>`;
                                        }
  //jquery
    //inyectar amigosFromServer en el HTML
