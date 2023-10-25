function somar1(a, b) {
    return a + b
}

console.log(somar1(5, 4))

function somar2(a) {
    return function(b) {
        return a + b
    }
}

console.log(somar2(5)(4))

const somarMais = somar2(5)
console.log(somarMais(4))