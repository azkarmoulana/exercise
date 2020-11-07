const { getRandomWordSync, getRandomWord } = require('word-maker');
const writeToFile = require('../utils/file_write');

const printRandomWordsWithError = () => {
    for (let i = 1; i <= 100; i++) {
        try {
            const word = getRandomWordSync({ withErrors: true });
            writeToFile(`${i}: ${word}`);
        } catch (e) {
            writeToFile(`${i}: It shouldn't break anything!`);
        } 
    }
};

const fizzBuzzWithError = () => {
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
            try {
               const word = getRandomWordSync({ withErrors: true });
               writeToFile(`${i}: ${word}`);
            } catch (e) {
                writeToFile(`${i}: It shouldn't break anything!`);
            }                     
        }
    } 
};

const printRandomWordsAsyncWithError = async () => {
    for (let i = 1; i <= 100; i++) {
        try {
            const word = await getRandomWord({ withErrors: true });
            writeToFile(`${i}: ${word}`);
        } catch (e) {
            writeToFile(`${i}: It shouldn't break anything!`);
        }       
    }
};

const fizzBuzzAsyncWithError = async () => {
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
            try {
                const word = await getRandomWord({ withErrors: true })
                writeToFile(`${i}: ${word}`);
            } catch (e) {   
                writeToFile(`${i}: It shouldn't break anything!`);    
            }         
        }
    } 
};

module.exports = { printRandomWordsWithError, fizzBuzzWithError, printRandomWordsAsyncWithError, fizzBuzzAsyncWithError }