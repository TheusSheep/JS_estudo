var hora_sistem = new Date()
var hora = hora_sistem.getHours()
console.log(`Agora são ${hora}`)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa Tarde!')
} else {
    console.log('Boa noite! Zzz...')
}