const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let list = [];

for (let i = a; i <= b; i++) {
    if (i % 2 === 1) {
        list.push(i);
    }
}

console.log(list.join(' '));