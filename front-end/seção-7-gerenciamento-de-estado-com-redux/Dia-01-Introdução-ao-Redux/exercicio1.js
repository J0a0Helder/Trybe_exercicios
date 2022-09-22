// SEXTO REQUISITO 
function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const btnPrevious = document.getElementById('previous')
const btnNext = document.getElementById('next')
const btnRandom = document.getElementById('random')
const NEXT_COLOR = 'NEXT_COLOR'
const PREVIOUS_COLOR = 'PREVIOUS_COLOR'
const RANDOM_COLOR = 'RANDOM_COLOR'

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

// QUARTO REQUISITO
btnNext.addEventListener('click', () => {
  store.dispatch({type: NEXT_COLOR})
})

btnPrevious.addEventListener('click', () => {
  store.dispatch({type: PREVIOUS_COLOR})
})

// SEXTO REQUISITO
btnRandom.addEventListener('click', () => {
  store.dispatch({type: RANDOM_COLOR})
})
      
// SEGUNDO REQUISITO
const reducer = (state = INITIAL_STATE, { type }) => {

  switch (type) {
    // TERCEIRO REQUISITO
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };

    // SEXTO REQUISITO
    case RANDOM_COLOR:
      return {
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      };

    default:
      return state
  }
}

// PRIMEIRO REQUISITO
const store = Redux.createStore(reducer);

// QUINTO REQUISITO
store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
});