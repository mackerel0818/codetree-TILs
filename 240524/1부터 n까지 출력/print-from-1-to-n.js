const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());
let list = []

for (let i=0; i<input;i++) {
    list[i] = i+1
}

console.log(list.toString().replaceAll(',', ' '))