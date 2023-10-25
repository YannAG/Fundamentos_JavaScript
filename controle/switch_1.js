let nota = 0

switch(Math.ceil(nota)) {
    case 10:
        console.log('UAU! Você conseguiu aprovação máxima, Medalha de Honra')
        break;
    case 8: case 9:
        console.log('Parabéns, pela aprovação');
        break;
    case 7:
        console.log('Passou por media, conseguiu por pouco sua aprovação')
        break;
    case 6: case 5: case 4:
        console.log('Não foi desta vez, mas dá pra rcuperar, tem uma segunda chance para a aprovação')
        break;    
    case 3: case 2:
        console.log('Reprovado')
        break;
    case 1: case 0:
        console.log('Desista')
        break;
    default:
        console.log('Nota inválida')

}