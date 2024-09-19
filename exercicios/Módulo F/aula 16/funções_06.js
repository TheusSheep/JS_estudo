function fatorial(n){
    if(n <= 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(`Seu número fatorial é ${fatorial(3)}`)