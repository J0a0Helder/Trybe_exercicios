let array = ['java', 'trybe', 'python', 'html', 'css'];
let word = '';
let word2 = '';

for (let i = 0; i < array.length; i += 1){
    word = array[i];
    if(word2.length < word.length){
        word2 = word;
    }
}
console.log('a maior palavra é: ' + word2);