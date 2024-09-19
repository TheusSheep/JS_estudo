function fatorial(n){
    let fat = 1
    for(var c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(`Seu número Fatorial é ${fatorial(1)}`)