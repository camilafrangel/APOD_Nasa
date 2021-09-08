$("#botao").click(function(evento) {
    evento.preventDefault();
    sendRequest ();
})

async function sendRequest() {
    let apiKey = "51ddeMDvPaIvycTmT7hLu7WU16YuAUtg3dlHsxqO";
    let inputData = $("#inputData").val();
    let apiKeyData = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inputData}`);
    let data = await apiKeyData.json();

    
    $('body').css('background-image', `url(${data.url})`);
    $('body').css("background-repeat", "no-repeat");
    $('body').css("background-size", "cover");
    document.querySelector('.tituloPrincipal').innerText = data.title;
    document.querySelector('#explicacao').innerText = data.explanation;
}

