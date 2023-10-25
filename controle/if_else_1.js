const nota1 = 6.8
const nota2 = 8.7

const media = (nota1 + nota2)/2

if (media >= 7 && media <= 10) {
    console.log("Parabéns, você foi aprovado com" , `Média: ${media}`)
} else {
    console.log("Sinto Muito, sua Média:", media + ", Não alcançou sua aprovação!")
}