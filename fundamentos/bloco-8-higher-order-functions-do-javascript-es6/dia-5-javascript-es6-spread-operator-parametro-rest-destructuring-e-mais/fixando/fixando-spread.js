// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maca', 'banana', 'mamao'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite-condensado', 'granola', 'abacaxi'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));