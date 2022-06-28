function textoParagrafo() {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerHTML = "Estar em um bom emprego e estar desenvolvendo softwares de qualidade!"
}
textoParagrafo();

function trocaAmarelo() {
    let content = document.getElementsByClassName('main-content')[0];
    content.style.background = 'rgb(76,164,109)';
}
trocaAmarelo();

function TrocarVermelho() {
    let centerContent = document.getElementsByClassName('center-content')[0];
    centerContent.style.background = '#fff';
}
TrocarVermelho();

function textoTitle() {
    let corretor = document.getElementsByTagName('h1')[0];
    corretor.innerText = "Exercício 5.1 - JavaScript"
}
textoTitle();

function UppercaseParagrafo() {
    let paragrafos = document.getElementsByClassName('center-content')[0];
    paragrafos.innerHTML = paragrafos.innerHTML.toUpperCase('')
}
UppercaseParagrafo();

function exibirParagrafo() {
    let paragrafo1 = document.getElementsByTagName('p');
    console.log(paragrafo1)
}
exibirParagrafo();