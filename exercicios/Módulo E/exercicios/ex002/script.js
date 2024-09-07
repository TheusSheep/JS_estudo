// Definição das ações
var enviar = document.getElementById('enviar')
enviar.addEventListener('click', clique)

// Definição das funções
function clique(){
    let numero = document.getElementById('número')
    let tab = document.getElementById('tab_s')

    if (numero.value.length == 0 ){
        window.alert('Número não encontrado para fazer a tabuada')
    } else {
        let n = Number(numero.value)
        tab.innerHTML = ""

        // Gerador da Tabuada
        for (var c = 1; c <= 10; c++){
           let item = document.createElement('option')
           item.text = `${n} x ${c} = ${n*c}`
           tab.appendChild(item)
        }
    }
}