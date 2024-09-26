var adicionar = document.getElementById('ad')
adicionar.addEventListener('click', clique)

var finalizar = document.getElementById('fl')
finalizar.addEventListener('click', fim)

let tab = document.getElementById('tab_num')
let num = document.getElementById('num_a')
let resp = document.getElementById('resp')
let list = []

function confNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function confList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function clique(){
    if(confNum(num.value) && !confList(num.value, list)){
        list.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        resp.innerHTML = ''
    } else {
        window.alert('[ERRO] Por favor, conferir de novo para ver se o número é válido ou se já está na lista')
    }

    num.value = ''
    num.focus
}

function fim(){
    if(list.length == 0){
        window.alert('[ERRO] Por favor colocar valor na lista')
    } else {
        let tot = list.length
        let maior = list[0]
        let menor = list[0]
        let soma = 0
        let med = 0

        for(let pos in list){
            if(list[pos] > maior){
                maior = list[pos]
            } else if(list[pos] < menor){
                menor = list[pos]
            }
        }

        for(let pos in list){
            soma += list[pos]
        }

        med = soma / tot

        resp.innerHTML = ''
        resp.innerHTML += `<p>Tem ${tot} números na sua lista</p>`
        resp.innerHTML += `<p>Maior valor na lista é ${maior}</p>`
        resp.innerHTML += `<p>Menor valor na lista é ${menor}</p>`
        resp.innerHTML += `<p>A soma dos números na lista é ${soma}</p>`
        resp.innerHTML += `<p>A média dos números na lista é ${med}</p>`
    }
   
}