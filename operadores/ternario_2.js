const hora = 24;
const saudacao =
    hora <= 11 ? 'Bom dia' : hora <= 17 ? 'Boa tarde' : hora <= 23 ? 'Boa Noite' : "Não Chegou o dia";
console.log(saudacao)