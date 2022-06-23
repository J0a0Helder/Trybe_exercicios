let array = ['java', 'trybe', 'python', 'html', 'css'];
let word2 = 'palavrateste';
let word = '';

for (let i = 0; i < array.length; i += 1){
    word = array[i];
    if(word2.length > word.length){
        word2 = word;
    }
}
console.log('a menor palavra é: ' + word2);