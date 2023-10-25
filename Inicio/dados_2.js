let preco = 65.36
let desconto = 0.5
let precoComDesconto = preco * (1 - desconto)

let nome = "Mala"
let categoria = "Bordo"
let tamanho = "Pequeno"

console.log("Produto: " + nome
    + "; Categoria: " + categoria
    + "; Tamanho: " + tamanho
    + "; Preço: " + "R$" + preco
    + "; Desconto: " + "%" + desconto)

console.log("")
console.log("Valor Total: " + "R$" + precoComDesconto)