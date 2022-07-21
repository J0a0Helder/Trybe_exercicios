const checarNumeros = (jogo, resultado) => jogo === resultado;

const loteria = (jogo, callback) => {
  const resultado = Math.floor((Math.random() * 5) + 1);

  return callback(jogo, resultado) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(loteria(2, checarNumeros));
