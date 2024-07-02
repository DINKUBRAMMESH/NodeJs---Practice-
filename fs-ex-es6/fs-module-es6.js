import fs from 'fs'
let data = fs.readFileSync('data.txt','utf-8',(err, data) => {if (err) throw err;
    console.log(data)
})
console.log(data);