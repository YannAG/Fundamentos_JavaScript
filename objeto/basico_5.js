const clientes = {
    cliente_1: {
    codigo: 0.912,
    nome: 'Yan',
    vip: true ,
    endereco: {
        CEP: 59088.610 ,
        Rua: 'Avenida Brasil' ,
        numero: 101,
        complemento: 'Apto 02 Bloco C' ,
        pontoDeReferencia:  [
            'Supermercado A' ,
            'Escola B'
        ]
    }
    },
    clinete_2 : {
    codigo: 0.897 ,
    nome: 'Mario' ,
    vip: false ,
    endereco: {
        CEP: 56036.719 ,
        Rua: 'Avenida Acre' ,
        numero: 560 ,
        complemento: 'Residencial Casas - 101' ,
        pontoDeReferencia: [
            'Farmacia C' ,
            'Praça D'
        ]
    }
    }
}
console.log(clientes.cliente_1)