//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function encontraMaior(array){
    
    let maior = 0;
    for (let index in array) {
        if (array[maior] < array[index]) {
          maior = index;
        }
      }
      return maior;
      console.log(maior)
}

console.log(encontraMaior([2, 3, 6, 70, 10, 1]))
