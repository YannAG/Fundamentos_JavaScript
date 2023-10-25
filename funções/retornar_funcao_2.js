function retornarUmaFuncao() {
    return function () {
        return 'Boa Tarde'
    }
}

const chamar = retornarUmaFuncao()
console.log(chamar())