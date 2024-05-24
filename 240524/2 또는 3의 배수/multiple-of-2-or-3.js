const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let list = [];

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        list.push(1);
    } else if(i % 3 === 0){
        list.push(1)
    } else {
        list.push(0)
    }
}

console.log(list.join(' '));