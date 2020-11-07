const fs = require('fs');

module.exports = writeToFile = (content) => {
    if (content) {
        fs.appendFileSync('output.txt', `${content}\n`, (error) => {
            if (error) throw error;
        });
    }
};