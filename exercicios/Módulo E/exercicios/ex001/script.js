var enviar = document.getElementById('enviar')
enviar.addEventListener('click', clique)

function clique(){
    var n_i = document.getElementById('n_inicial')
    var n_f = document.getElementById('n_final')
    var p = document.getElementById('passos')
    var resposta = document.getElementById('resp')

    if (n_i.value.length == 0 || n_f.value.length == 0 ){
        window.alert('Verifique se {Início} ou {Fim} estão com algum número.')
    } else if(p.value.length == 0 || p.value == 0){
        window.alert('Como não foi colocado a quantidade de {Passos} então será relacionado ao número 1.')
        p.value = 1
    }
    for (var c = Number(n_i.value); c <= Number(n_f.value); c += Number(p.value)){
        resposta.innerHTML += ` ${c}° &#x1F449; `
    }
    resposta.innerHTML += ` &#x1F3C1; `
}