// Definição das ações
var enviar = document.getElementById('enviar')
enviar.addEventListener('click', clique)

// Definição das funções
function clique(){
    let numero = document.getElementById('número')
    let resposta = document.getElementById('tabuada')

    if (numero.value.length == 0 ){
        window.alert('Número não encontrado para fazer a tabuada')
    } else {
        let n1 = Number(numero.value)
        let n2 = 0

        resposta.innerHTML = `<h2>Tabuada<h2>`

        // Gerador da Tabuada
        for (var c = 1; c <= 10; c++){
            resposta.innerHTML += ` ${n1} x ${c} = `
            n2 = n1 * c
            resposta.innerHTML += `${n2} <br>`
        }
    }
}