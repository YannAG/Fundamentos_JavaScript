function somar(notas, n1, n2) {
    if(typeof notas === 'function')
    console.log(notas(n1, n2))
}

function media(n1, n2) {
    return (n1 + n2)/2
}

somar(media, 6, 8)