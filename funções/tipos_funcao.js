// Função #1: COM parâmetros e COM retorno

function operaracaoDosValores(f, g, h) {
    return (f + g) * h

}

let resultado = operaracaoDosValores(6, 17, 3)
console.log(`Função 1\nO resultado final é: ${resultado} \n\nFunção 2`)


// Função #2: COM parâmetros e SEM retorno

function operacaoSemRetorno(a, b, c) {
    console.log(`O resultado da operação é: ${(a + b)/c} \n\nFunção 3`)

}

operacaoSemRetorno(6, 8, 2)


// Função #3: SEM parâmetros e COM retorno

function exibirDataAtual() {
    return new Date();
}

console.log(`A data atual é: ${exibirDataAtual()}\n\nFunção 4`)


// Função #4: SEM parâmetros e SEM retorno

function horaAtual() {
    console.log(`A hora atual é: ${new Date().getHours()}:00`)
}

horaAtual()