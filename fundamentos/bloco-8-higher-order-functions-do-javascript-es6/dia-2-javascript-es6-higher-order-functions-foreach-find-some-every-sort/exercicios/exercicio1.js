const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//exercicio 1 Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947(date) {
  const author = books.find((book) => book.author.birthYear === date);
  return `O autor do livro escrito em ${date} é ${author.author.name}!`;
}
console.log(authorBornIn1947(1947));

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//exercicio 2 Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook = "essa é uma string grande para ser comparada";

  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
console.log(`o nome do livro de menor nome é: ${smallerName()}!`);

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// exercicio 3 Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
  return books.find((book) => book.name.length === 26);
}
console.log(getNamedBook());

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// exercicio 4 Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc(arr) {
  arr.sort((a, b) => (a.releaseYear < b.releaseYear ? 1 : -1));
  console.log(books);
}


//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// exercicio 5 Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX(arr) {
  return arr.every((a) => a.author.birthYear > 1900 && a.author.birthYear < 2000);
}
console.log(everyoneWasBornOnSecXX(books));

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// exercicio 6 Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s(arr) {
  return arr.some((a) => a.releaseYear > 1980 && a.releaseYear < 1989);
}
console.log(someBookWasReleaseOnThe80s(books));

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// exercicio 7 Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

