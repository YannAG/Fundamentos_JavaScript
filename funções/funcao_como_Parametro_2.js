function executar(fn, n1, n2) {
    if(typeof fn === 'function')
    console.log(fn(n1, n2))
}

function media(n1, n2) {
    return (n1 + n2)/2

}

function nome(nome) {
    if(typeof nome === 'string')
    return nome
}

function soma(a, b) {
    return a + b
}

executar(media, 6, 8)
executar(soma, 6, 4)
executar(nome, 'Yan')