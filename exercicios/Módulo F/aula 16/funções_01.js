function imparpar(n){
    if (n % 2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}

var num = 12

console.log(`Seu número é ${imparpar(num)}`)