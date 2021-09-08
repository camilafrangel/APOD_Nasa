$("#botao").click(function(evento) {
    evento.preventDefault();
    sendRequest ();
})

async function sendRequest() {
    let apiKey = "51ddeMDvPaIvycTmT7hLu7WU16YuAUtg3dlHsxqO";
    let inputData = $("#inputData").val();
    let apiKeyData = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inputData}`);
    let data = await apiKeyData.json();
    console.log (data);
}

document.querySelector('#tituloNasa')
document.querySelector('#dataNasa')
document.querySelector('#textoNasa')
document.querySelector('#midiaNasa')
document.querySelector('#copyNasa')
