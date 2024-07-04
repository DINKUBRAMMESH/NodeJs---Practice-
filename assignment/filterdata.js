const fs = require('fs');

fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) throw err;
    
    let users = JSON.parse(data);
    let maleUsers = [];
    let femaleUsers = [];
    
    for (let user of users) {
        if (user.gender === 'Male') {
            maleUsers.push(user);
        } else if (user.gender==='Female'){
            femaleUsers.push(user);
        }
    }

    fs.writeFile('male.json', JSON.stringify(maleUsers), err => {
        if (err) throw err;
    });

    fs.writeFile('female.json', JSON.stringify(femaleUsers), err => {
        if (err) throw err;
    });
});
