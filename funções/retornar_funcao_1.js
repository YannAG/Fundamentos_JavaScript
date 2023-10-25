function retornaUmaFuncao() {

    function bomDia() {
        return 'Bom Dia!!!'
    }

    return bomDia
}

const funcao = retornaUmaFuncao()
console.log(funcao())
