const nomes = []
const notas = [8, 5, 2, 7, 10, 6]

notas.push(4)

nomes[0] = 'Yan' 
nomes[1] = 'Manuel'
nomes[2] = 'Breno'
nomes[3] = 'Pablo'
nomes[4] = 'Gabriel'
nomes[5] = 'Raphael'

nomes.push('Fabian')

console.log(`O aluno ${nomes[0]} aprovou com nota ${notas[0]}`)
console.log(`O aluno ${nomes[1]} ficou em recuperação com nota ${notas[1]}`)
console.log(`O aluno ${nomes[2]} reprovou com nota ${notas[2]}`)
console.log(`O aluno ${nomes[3]} teve uma aprovação com média ${notas[3]}`)
console.log(`O aluno ${nomes[4]} aprovou com nota máxima com ${notas[4]}`)
console.log(`O aluno ${nomes[5]} ficou em recuperação com nota ${notas[5]}`)
console.log(`O aluno ${nomes[6]} ficou em recuperação com nota ${notas[6]}`)

console.log(nomes.length)

