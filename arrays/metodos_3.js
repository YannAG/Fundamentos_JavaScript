let nome = 'Alan'
let nota = 8

const n = [3,7,8,2,5,1]

function paraCadaElemtento(elemento, indice, array) {
    console.log(array)

}

n.forEach(paraCadaElemtento)


n.forEach(function() {
    console.log(`O aluno ${nome} tirou nota ${nota}`)
})
