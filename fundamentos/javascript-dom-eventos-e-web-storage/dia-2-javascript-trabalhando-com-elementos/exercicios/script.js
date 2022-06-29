// 1 
const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
h1.className = 'title';
document.body.appendChild(h1);

// 2 
const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

// 3 
const section = document.createElement('section');
section.className = 'center-content';
main.appendChild(section);

// 4 
const p = document.createElement('p');
p.innerText = 'Exercicio de João Hélder';
section.appendChild(p);

// 5
const section2 = document.createElement('section');
section2.className = 'left-content';
main.appendChild(section2);

// 6
const section3 = document.createElement('section');
section3.className = 'right-content';
main.appendChild(section3);

// 7
const img = document.createElement('img')
img.className = 'small-image'
img.src = 'https://picsum.photos/200';
section2.appendChild(img);

// 8
const ul = document.createElement('ul');
section2.appendChild(ul);

const NomeNumeros = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
  'Sete', 'Oito', 'Nove', 'Dez']

  for (let num in NomeNumeros) {
  const li = document.createElement('li');
  li.innerHTML = NomeNumeros[num];
  ul.appendChild(li);
}