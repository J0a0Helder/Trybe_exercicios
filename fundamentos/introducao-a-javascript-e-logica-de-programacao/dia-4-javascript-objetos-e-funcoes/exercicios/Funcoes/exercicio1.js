//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function palindromo (str){
    
    let palavraInvertida = str.split("").reverse().join("");
    if(str === palavraInvertida){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
palindromo("tenet")
