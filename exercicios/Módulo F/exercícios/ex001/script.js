var adicionar = document.getElementById('ad')
adicionar.addEventListener('click', clique)

function clique(){
    let tab_num = document.getElementById('tab_num')
    let num_a = document.getElementById('num_a')
    let list_num = []
    
    // Confirmação de validade
    if(num_a.value <= 0 || num_a.value.length == 0 || num_a.value > 100){
        window.alert('[ERRO] O número colocado não é permitido ou é inválido, por favor colocar número de 1 a 100')
    } else {
        // Visualização na Tabela
        let item = document.createElement('option')
        item.text = `Valor ${num_a.value} adicionado`
        tab_num.appendChild(item)
    }

}