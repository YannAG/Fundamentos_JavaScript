function criarData(dia, mes, ano) {
    return {
        dia ,
        mes ,
        ano ,
        exibir() {
            return `${this.dia}/${this.mes}/${this.ano}\n`
        }
    }
}

const d1 = criarData(18, 9, 2023)
console.log(d1.exibir())

const d2 = criarData(22, 10, 2023)
console.log(d2.exibir())

const d3 = criarData(2, 2, 2024)
console.log(d3.exibir())

