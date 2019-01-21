const fs = require('fs');

const readStream = fs.createReadStream('./day1Input.txt');
let numbers = [];
let data = '';
let result = 0;
let reachedFrequencies = [];
let equalFrequency = null;

const calculate = () => {
    numbers = data.split('\n');
    numbers.forEach((number) => { result += parseInt(number) });

    return result;
}

const loopOverNumbers = () => {
    let i = 0;
    while (i < numbers.length) {
        const n = result += parseInt(numbers[i]);
        const index = reachedFrequencies.indexOf(n);
        if (index !== -1) {
            equalFrequency = reachedFrequencies[index];
            break;
        }
        reachedFrequencies.push(n);
        i++;
    }
}

const findFrequency = () => {
    result = 0;

    while (!equalFrequency) {
        loopOverNumbers();
    }

    return equalFrequency;
};

readStream
    .on('data', (chunk) => {
        data += chunk;
})
    .on('end', () => {
        // first part
        console.log(calculate());

        // second part
        console.log(findFrequency());
});