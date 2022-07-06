// 1 e 2
let cor = document.getElementById('elementoOndeVoceEsta').parentNode;
cor.style.color = ('red');

// 3
document.getElementById('primeiroFilhoDoFilho').innerText = 'um texto bem legal';

// 4
console.log(document.getElementById('pai').firstElementChild);

// 5
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

// 6 
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

// 7
console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

// 8
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);
//ou
console.log(document.getElementById('pai').childNodes[5]);