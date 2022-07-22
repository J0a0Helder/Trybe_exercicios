const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((names) => name === names);
}

console.log(hasName(names, 'José'));
console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Julio'));