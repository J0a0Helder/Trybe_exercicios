function trocarParagrafo() {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerHTML = "Estar em um bom emprego e estar desenvolvendo softwares de qualidade!"
  }
  trocarParagrafo()

  function trocarTexto(){
    let content = document.getElementsByClassName('main-content')[0];
    content.style.background = 'rgb(76,164,109)';
  }
  trocarTexto()