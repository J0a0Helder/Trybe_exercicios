let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
  for (let index = 0; index < i; index += 1) {
    if (numbers[i] > numbers[index]) {
      let position = numbers[i];
      numbers[i] = numbers[index];
      numbers[index] = position;
    }
  }
}

console.log (numbers);