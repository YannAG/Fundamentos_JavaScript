const nota1 = 6.0
const nota2 = 8.0
const nota3 = 7.0

function mediaOperacao(n1, n2, n3) {
    return (n1 + n2 + n3) / 3 

}

function mediaStatus(media) {
    if(media >= 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}

const mediaResultado = mediaOperacao(nota1, nota2, nota3)
const statusResultado = mediaStatus(mediaResultado)
console.log(`A situação do aluno é: ${statusResultado}`)