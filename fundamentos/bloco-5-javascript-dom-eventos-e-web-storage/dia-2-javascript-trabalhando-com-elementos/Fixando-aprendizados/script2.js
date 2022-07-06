//1. Crie um irmão para elementoOndeVoceEsta.
//2. Crie um filho para elementoOndeVoceEsta.
//3. Crie um filho para primeiroFilhoDoFilho.
//4. A partir desse filho criado, acesse terceiroFilho.

// 1
const pai = document.getElementById('pai');
const elementoIrmao = document.createElement('section');
elementoIrmao.id = 'elementoIrmao';
pai.appendChild(elementoIrmao);

// 2
const ondeVcesta = document.getElementById('elementoOndeVoceEsta');
const elementofilho = document.createElement('section');
elementofilho.id = 'terceiroFilhoDoFilho';
ondeVcesta.appendChild(elementofilho);

// 3
const filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
const filhoDoFilho1 = document.createElement('section');
filhoDoFilho1.id = 'netoDoFilho';
filhoDoFilho.appendChild(filhoDoFilho1);

// 4
console.log(document.getElementById('netoDoFilho').parentElement.parentElement.nextElementSibling);