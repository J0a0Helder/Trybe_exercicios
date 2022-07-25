const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui: 

//exercicio 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames(books) {
  return books.map((book) => `Livro: ${book.name} - Gênero: ${book.genre} - Autor: ${book.author.name}.`);
}
console.log(formatedBookNames(books));

//exercicio 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

function nameAndAge(books) {
  const authorObject = books.map((book) => {
    return {author: book.author.name, age: (book.releaseYear - book.author.birthYear)}
  });
  return authorObject.sort((a, b) => a.age > b.age ? 1 : -1);
}
console.log(nameAndAge(books));

//exercicio 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction(books) {
  return books.filter((book) => {
    if (book.genre === 'Ficção Científica' || book.genre === 'Fantasia') {
      return book;
    }
  });
}
console.log(fantasyOrScienceFiction(books));

//exercicio 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered(books) {
  const oldBooks = books.filter((book) => {
    if ((2022 - book.releaseYear) > 60) {
      return book
    }
  });
  return oldBooks.sort((a, b) => a < b ? 1 : -1);
}
console.log(oldBooksOrdered(books));