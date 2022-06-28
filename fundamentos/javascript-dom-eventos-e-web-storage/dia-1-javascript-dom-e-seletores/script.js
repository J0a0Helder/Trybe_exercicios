function trocarParagrafo() {
    let paragrafo = document.getElementsByTagName('p')[1];
    paragrafo.innerHTML = "Estar em um bom emprego e estar desenvolvendo softwares de qualidade!"
  }
  trocarParagrafo();

  function trocaAmarelo(){
    let content = document.getElementsByClassName('main-content')[0];
    content.style.background = 'rgb(76,164,109)';
  }
  trocaAmarelo();

  function TrocarVermelho(){
    let centerContent = document.getElementsByClassName('center-content')[0];
    centerContent.style.background = '#fff';
  }
  TrocarVermelho();

  
