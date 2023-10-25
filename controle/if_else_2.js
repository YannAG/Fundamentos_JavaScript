const hora = 10
let saudacao;

if (hora >=5 && hora < 12) {
    saudacao = 'Bom Dia !'
} if (hora >= 12 && hora < 18) {
    saudacao = 'Boa Tarde!'
} else {
    saudacao = 'Boa Noite'
}


console.log(saudacao)