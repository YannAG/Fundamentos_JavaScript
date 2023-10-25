class Data {

    constructor (dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano

    }

    exibir() {
        return `Dia: ${this.dia}\nMês: ${this.mes}\nAno: ${this.ano}\n`
    }
}

const d1 = new Data(2, 2, 2024)
console.log(d1.exibir())

const d2 = new Data(5, 7, 2023)
console.log(d2.exibir())