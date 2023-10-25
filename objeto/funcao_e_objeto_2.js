function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
    this.exibir = function () {
        return `\nDia: ${this.dia}\nMês: ${this.mes}\nAno: ${this.ano}\n`
    }

}

const d1 = new Data(9, 10, 2021)
console.log(d1.exibir())

const d2 = new Data(22, 10, 2023)
console.log(d2.exibir())

const d3 = new Data(2, 2, 2024)
console.log(d3.exibir())
