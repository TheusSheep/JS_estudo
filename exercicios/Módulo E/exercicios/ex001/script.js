var enviar = document.getElementById('enviar')
enviar.addEventListener('click', clique)

function clique(){
    let resposta = document.getElementById('resp')
    let n_inicial = document.getElementById('n_inicial')
    let n_final = document.getElementById('n_final')
    let passos = document.getElementById('passos')
    

    if (n_inicial.value.length == 0 || n_final.value.length == 0 || passos.value.length == 0 ){
        resposta.innerHTML = 'Impossivel Contar!'
        window.alert('Verifique se {Início}, {Fim} ou {Passos} estão com algum número.')

    } else {
        let n_i = Number(n_inicial.value)
        let n_f = Number(n_final.value)
        let p = Number(passos.value)
        resposta.innerHTML = 'Contando: <br>'

        if (p <= 0){
            window.alert('O número definito de {Passos} não é possível fazer uma contagem por isso recebera valor 1')
            p = 1
        }
        
        if (n_i < n_f){
            // Contagem Crescente
            for (var c = n_i; c <= n_f; c += p){
                resposta.innerHTML += ` ${c}° \u{1F449} `
            }
        } else {
            // Contagem decrescente
            for (var c = n_i; c >= n_f; c -= p){
                resposta.innerHTML += ` ${c}° \u{1F449} `
            }
        }
         resposta.innerHTML += ` \u{1F3C1} `
    }
}