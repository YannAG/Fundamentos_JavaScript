let i;
let j;

for(i = 1; i <= 3; i++){
    let linha = '';
    for(j = 1; j <= 3; j++){
        linha += ` [${i}, ${j}] `
    }
    console.log(linha)
}
