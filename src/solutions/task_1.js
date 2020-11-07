const { getRandomWordSync } = require('word-maker');
const writeToFile = require('../utils/file_write');

module.exports = printRandomWords = () => {
    for (let i = 1; i <= 100; i++) {
        const word = getRandomWordSync();
        writeToFile(`${i}: ${word}`);
    }
};