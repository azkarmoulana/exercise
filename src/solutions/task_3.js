const { getRandomWord } = require('word-maker');
const writeToFile = require('../utils/file_write');

const printRandomWordsAsync = async () => {
    for (let i = 1; i <= 100; i++) {
        const word = await getRandomWord({ slow : false });
        writeToFile(`${i}: ${word}`)
    } 
};

const fizzBuzzAsync = async () => {
    for (let i = 1; i <= 100; i++) {

        const multipleOfThree = i % 3 === 0;
        const multipleOfFive = i % 5 === 0;
    
        if (multipleOfThree && multipleOfFive) {
            writeToFile(`${i}: FizzBuzz`);
    
        }else if (multipleOfThree) {
            writeToFile(`${i}: Fizz`);
    
        } else if (multipleOfFive) {
            writeToFile(`${i}: Buzz`);
    
        } else {
            const word = await getRandomWord();
            writeToFile(`${i}: ${word}`);
        }
    } 
};

module.exports = { printRandomWordsAsync, fizzBuzzAsync }
