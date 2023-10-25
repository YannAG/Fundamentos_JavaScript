const nota_1 = 7.6
const nota_2 = 3.1
const nota_3 = 6.7

function notaMinimo(n1, n2) {
    return n1 <= n2 ? n1 : n2;

}

function media(n1, n2, n3) {
    const menorNota = notaMinimo(n1, notaMinimo(n2, n3))
    if (menorNota === n1) {
        return (n2 + n3) / 2
    } else if ( menorNota === n2) {
        return (n1 + n3) / 2
    } else {
        return (n1 + n2) / 2
    }
}

function mediaStatus(media) {
    if(media >= 7) {
        return 'APROVADO'
    } else if (media >=4) {
        return 'RECUPERARAÇÃO'
    } else {
        return 'REPROVADO'
    }
}

const mediaFInal = media(nota_1, nota_2, nota_3)
const statusFinal = mediaStatus(mediaFInal)
console.log(`A situação do aluno é: ${statusFinal}`)