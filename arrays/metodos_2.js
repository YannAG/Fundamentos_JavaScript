const numeros = [1,2,3,4,5,8,6,9,7,10]

for (let n of numeros) {
    console.log(n)
}

numeros.splice(1, 2)
console.log(numeros)

console.log(numeros.pop())
console.log(numeros.pop())
console.log(numeros)
