const printRandomWords = require('./solutions/task_1');
const fizzBuzz = require('./solutions/task_2');
const  { printRandomWordsAsync, fizzBuzzAsync }  = require('./solutions/task_3');
const  { printRandomWordsWithError, fizzBuzzWithError, printRandomWordsAsyncWithError, fizzBuzzAsyncWithError }  = require('./solutions/task_4');
const  printOptimizedRandomWordsAsync  = require('./solutions/radom_words_optimized');

// YOUR CODE HERE

/**
 * NOTE
 * To make the code more cleaner and modularized, solution for each task was written in a separate file that goes under ./solution directory.
 * A utility function to write information to a file is implemented in the ./utils directory.
 * All the numbers are printed in ascending order.
 */


/**
 * Wrapping the top-level code with anonymous async function to invoke all the async functions sequentially.
 */
(async () => {
    
    // Task 1
    printRandomWords();
    
    // Task 2
    fizzBuzz();

    // Task 3
    await printRandomWordsAsync();
    await fizzBuzzAsync();

    // Task 4 
    printRandomWordsWithError();
    fizzBuzzWithError();
    await printRandomWordsAsyncWithError();
    await fizzBuzzAsyncWithError()

    // Optimized solution to run the code in less than 1000ms with 'slow' option turned on.
    printOptimizedRandomWordsAsync();
})();
