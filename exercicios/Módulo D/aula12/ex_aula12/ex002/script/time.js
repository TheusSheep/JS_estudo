var enviar = document.getElementById('enviar')
enviar.addEventListener('click', calc)

function calc(){
    var data = new Date()
    var ano = data.getFullYear()
    var n1 = document.getElementById('num')
    var sex = document.getElementsByName('rad_s')
    var resp = document.getElementById('res')

    if (n1.value.length == 0 || n1.value >= ano) {

        window.alert('[Erro] Verifique se colocou todas as informações')

    } else {
        var img = document.createElement('img')
        var idade = ano - n1.value
        var genero = ''

        if (sex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'image/little_male.jpg')
            } else if (idade < 18){
                img.setAttribute('src', 'image/teen_male.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'image/adult_male.jpg')
            } else {
                img.setAttribute('src', 'image/velho.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12){
                img.setAttribute('src', 'image/little_girl.jpg')
            } else if (idade < 18){
                img.setAttribute('src', 'image/teen_girl.jpg')
            } else if (idade < 50){
                img.setAttribute('src', 'image/adult_girl.jpg')
            } else {
                img.setAttribute('src', 'image/velha.jpg')
            }
        }
        resp.innerHTML = `Detectamos gênero ${genero} com ${idade} anos`
        resp.appendChild(img)
    }
    
}