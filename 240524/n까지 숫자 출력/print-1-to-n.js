const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());
let list = [];

let i = 1

while(i <= n){
    list.push(i)
    i++
}

console.log(list.join(' '));