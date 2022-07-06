const pai = document.getElementById('pai');

for (let i = pai.childNodes.length - 1; i >= 0; i -=1) {
    const element = pai.childNodes[i];

    if(element.id !== 'elementoOndeVoceEsta'){
        element.remove();
    }
}
const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();