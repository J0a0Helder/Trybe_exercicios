//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function encontraMenor(array){
    
    let menor = 0;
    for (let index in array) {
        if (array[menor] > array[index]) {
          menor = index;
        }
      }
      return menor;
}

console.log(encontraMenor([2, 4, 6, 7, 10, 0, -3]));