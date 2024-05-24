const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let list = [];

for (let i = n; i >0; i--) {
        list.push(i);
}

console.log(list.join(' '));