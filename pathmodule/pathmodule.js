// const path = require('path');
// const fs = require('fs');


// const fullPath = path.join('NODE.JS-PROSTACK', 'pathmodule', 'pathmodule.js', 'data.txt', 'Utf-8');

// const readfile= fs.readFileSync(fullPath,'utf-8')

// console.log(readfile);


// import path from 'path';
// import fs from 'fs';
// const fullPath = path.join('C:\\Users\\ASBD\\Desktop\\NODE.JS-PROSTACK\\fs-ex-es6', 'data.txt');
// const readFile = fs.readFileSync(fullPath, 'utf-8');
// console.log(readFile);

import fs from 'fs'
import path from'path'
let fileName = path.join(process.cwd(),"NODE.JS-PROSTACK","readwrite",'data.txt');
fs.readFile(fileName,'utf-8',(err,data)=>{
    if (err) throw err
    console.log(data)
})          