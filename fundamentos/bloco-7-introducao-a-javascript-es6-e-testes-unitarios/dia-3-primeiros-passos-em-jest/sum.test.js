const sum = require('./sum.js');

describe('A função retorna com sucesso: ', () => {
  test('9 quando sum recebe 4 e 5', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  test('0 quando sum recebe 0 e 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  test('Erro quando sum recebe 4 e "5"', () => {
    expect(() => { sum() }).toThrow();
  });

  test('A mensagem de erro "parameters must be numbers" quando não recebe um parametro válido', () => {
    expect(() => { sum() }).toThrowError(new Error('parameters must be numbers'))});
});
