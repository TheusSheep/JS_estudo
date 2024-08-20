function loading(){
    var msg = document.getElementById('msg')
    var image = document.getElementById('image')
    var temp = new Date()
    var hours = temp.getHours()
    msg.innerHTML = `<p>Agora são ${hours} horas</p>`

    if (hours >= 0 && hours < 12){
        image.src = 'image/foto_manhã.jpg'
        document.body.style.background = '#D9B88F'
    } else if (hours < 18){
        image.src = 'image/foto_tarde.jpg'
        document.body.style.background = '#F25C05'
    } else {
        image.src = 'image/foto_noite.jpg'
        document.body.style.background = '#152840'
    }
}