const a = 70
const b = 30
const operacao = '?'

let resultado;

if (operacao === '*') {
    resultado = a * b
} else if (operacao === '-') {
    resultado = a - b
} else if (operacao === '+') {
    resultado = a + b
} else if (operacao === '/') {
    resultado = a / b
} else if (operacao === '%'){
    resultado = a % b
} else {
    resultado = 'Operação inválida'
}
    



console.log(resultado)