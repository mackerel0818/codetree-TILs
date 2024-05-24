const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let list = [];

for (let i = 1; i < n*5+1; i++) {
    if (i % n === 0) {
        list.push(i);
    }
}

console.log(list.join(' '));