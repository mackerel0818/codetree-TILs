const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split('\n');
let a = Number(input[0])
let b = Number(input[1])
console.log(a+87)
console.log(b%10)