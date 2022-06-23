let array = [];
let result = 1;
for (let i = 1; i <= 10; i += 1){

    array.push(i);
}
for (let index = 0; index < array.length; index += 1) {
    result = result * array[index];   
}

console.log(result)

