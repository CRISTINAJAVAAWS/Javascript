function generarStructure(arrNotes, divN) {
    $(paramElemid).html(function () {
        let htmlAmigos = '';
        paramAmigos.forEach(piano => {
            htmlPiano += `<li>
            <div>${piano.nota}</div>
            <div>${piano.nota}</div>
            <div><button class="saludaBtn" data-value="${piano.nota}">Saludar</button></div>
            </li>`;
        });

$('#cargarpiano').click(function () {
$.ajax({
    url: "http://www.mocky.io/v2/5bd885bf310000f735474ef2",
    }).done(function (cargarpiano) {
        console.log(cargarpiano);
