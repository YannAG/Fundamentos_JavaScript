console.log("Duas expressões em TRUE\n"+ "=======================\n")

let verdadeira_1 = 2 + 5 >= 7 && 8 > 3
let verdadeira_2 = !(6 * 6 < 3)

console.log(verdadeira_1)
console.log(verdadeira_2)

console.log("\nDuas expressões em FALSE\n"+ "=======================\n")

let falso_1 = 8 - 4 > 12 || false || 15 === '15'
let falso_2 = !(7 !== 6 + 1 || 3 + 10 > 20 || '3' !== 3)

console.log(falso_1)
console.log(falso_2)