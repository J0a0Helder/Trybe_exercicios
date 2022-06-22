let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 270];
let contador = 0;

for (let i = 0; i < numbers.length; i+=1){
    if(numbers[i]%2 !== 0){
        contador += 1
    }
}
if(contador >= 1){
    console.log ('existem ' + contador + ' números ímpar')
}
else{
    console.log('nenhum valor ímpar encontrado')
}

