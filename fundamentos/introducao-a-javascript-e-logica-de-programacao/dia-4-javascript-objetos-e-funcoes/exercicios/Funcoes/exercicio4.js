//Crie uma função que receba um array de nomes e retorne o nome com a menor quantidade de caracteres

function maiorNome(palavras) {
    let maior = palavras[0];
    for(let index in palavras){
        if(maior.length < palavras[index].length){
            maior = palavras[index];
        }
    }
    return maior;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 