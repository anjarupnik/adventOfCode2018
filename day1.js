const fs = require('fs');

const readStream = fs.createReadStream('./day1Input.txt');
let data = '';
let result = 0;

const calculate = () => {
    data.split('\n').forEach((number) => {
        result += parseInt(number);
    });
    return result;
}

readStream
    .on('data', (chunk) => {
        data += chunk;
})
    .on('end', () => {
        console.log(calculate());
});