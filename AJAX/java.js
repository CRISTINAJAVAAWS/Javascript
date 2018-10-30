$('#cargarbtn').click(function () {
    $.ajax({
        url: "https://www.mocky.io/",
    }).done(function (porjemplodata) {
        console.log(porejemplodata);
    });
});

  //jquery