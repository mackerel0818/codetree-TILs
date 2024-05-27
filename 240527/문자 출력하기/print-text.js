const fs = require('fs');

let input = fs.readFileSync(0).toString().trim();
let list = []

for (let i = 1; i <= 8; i++) {
    list.push(input)
}


console.log(list.join(""))