// import fs from 'fs'
// let data = fs.readFileSync('data.txt','utf-8')
// fs.writeFileSync('data.txt',data)


const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    fs.writeFile('data copy.txt', data, (err) => {
        if (err) throw err;
        console.log('written successfully');
    });
});
