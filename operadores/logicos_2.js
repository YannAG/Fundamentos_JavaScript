const t1 = true
const t2 = true

let comprarTV50 = t1 && t2
console.log("Vamos comprar a TV de 50?", comprarTV50) // AND

let comprarTV32 = t1 !== t2
console.log("Vamos comprar a TV de 32?", comprarTV32) // XOR

let tomarSorvete = t1 || t2
console.log("Vamos tomar sorvete?", tomarSorvete) // OR

let naoTomarSorvete = !tomarSorvete
console.log("Vamos tomar ficar em Casa?", naoTomarSorvete) // NOT