const fs = require('fs');

const read = fs.createReadStream('./input.txt', {
    highWaterMark: 13
});
const write = fs.createWriteStream('./ouput.txt');

read.on('data', chunk => {
    const str = chunk.toString();
    write.write(`${str}\n`);
});
read.on('end', () => {
    console.log('data has been read from file');
    write.end();
});

write.on('finish', () => {
    console.log('data has ben written from file');
});