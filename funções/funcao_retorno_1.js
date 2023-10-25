function comRetorno() {
    return 1;
}

let valor = comRetorno()
console.log(valor)

function retTextoOuNumero(retorna) {
    return retorna ? 'Texto': 2023
}  

let texto = retTextoOuNumero(true);
console.log(texto)

let numero = retTextoOuNumero(false)
console.log(numero)