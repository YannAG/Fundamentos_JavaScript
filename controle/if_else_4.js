const hora = 23
let saudacao

if (hora < 12) {
    saudacao = 'Bom dia'
} else if (hora < 18) {
    saudacao = 'Boa Tarde'
} else if (hora <= 23) {
    saudacao = 'Boa Noite'
} else {
    saudacao = 'Boa Madrugada'
}


console.log(saudacao)