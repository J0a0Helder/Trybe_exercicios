let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplos = [];

for (let i = 0; i < numbers.length; i += 1) {
    if(i + 1 < numbers.length){
    multiplos.push(numbers[i] * numbers[i + 1]);
    } 
    else{
    multiplos.push(numbers[i] * 2);
  }
}

console.log(multiplos);