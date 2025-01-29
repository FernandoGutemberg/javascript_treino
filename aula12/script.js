function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //console.log("Bom dia!");
        img.src = 'manha.png'
        document.body.style.background = '#3e3a27'
    } else if (hora >= 12 && hora < 18) {
        //console.log("Boa Tarde!");
        img.src = 'tarde.jpg'
        document.body.style.background = '#482713'


    } else {
        //console.log("Boa Noite");
        img.src = 'noite.png'
        document.body.style.background = '#17314a'


    }

}
