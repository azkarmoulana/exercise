const { getRandomWord } = require('word-maker');
const writeToFile = require('../utils/file_write');

/**
 * Optimized solution to run the code in less than 1000ms with 'slow' option turned on.
 */
module.exports = printOptimizedRandomWordsAsync = async () => {
    const asyncFuncList = [];
    for (let i = 1; i <= 100; i++) {
        const wordPromise = getRandomWord({ slow : true });
        asyncFuncList.push(wordPromise);
    }

    Promise.all(asyncFuncList).then(results => {
        results.forEach((word, index) => {
            writeToFile(`${++index}: ${word}`)
        });
    });    
};
