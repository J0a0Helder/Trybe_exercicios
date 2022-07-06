let numbers = [1, 0, 3, 19, 70, 8, 100, 2, 35, 270];
let menorNum = numbers[0]

for (let i = 0; i < numbers.length; i+=1){
    if(numbers[i] < menorNum){
        menorNum = numbers[i]
    }
}

console.log (menorNum)