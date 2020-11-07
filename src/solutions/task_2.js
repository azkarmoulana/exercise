const { getRandomWordSync } = require('word-maker');
const writeToFile = require('../utils/file_write');

module.exports = fizzBuzz = () => {
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
            const word = getRandomWordSync();
            writeToFile(`${i}: ${word}`);
        }
    } 
};