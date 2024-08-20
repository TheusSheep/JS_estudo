var idade = 19
if (idade < 16){
    console.log('Não vota')
} else {
    if (idade < 18 || idade >= 65){
        console.log('Seu voto não é obrigadorio')
    } else {
        console.log('Voto obrigadorio')
    }
}