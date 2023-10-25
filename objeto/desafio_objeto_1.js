const data = {
    dia: 22 ,
    mes: 10 ,
    ano: 2023 ,
    exibir: function() {
       return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data.exibir())

