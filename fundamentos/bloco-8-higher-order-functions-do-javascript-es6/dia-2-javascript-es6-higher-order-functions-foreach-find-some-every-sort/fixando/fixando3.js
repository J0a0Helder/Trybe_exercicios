// fixando 3.1
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((names) => name === names);
}

console.log(hasName(names, 'José'));
console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Julio'));

// fixando 3.2
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((all) => all.age >= minimumAge);
}

console.log(verifyAges(people, 15));
console.log(verifyAges(people, 18));
console.log(verifyAges(people, 16));