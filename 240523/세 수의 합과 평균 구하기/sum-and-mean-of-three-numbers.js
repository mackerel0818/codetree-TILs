const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(' ');
let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])

let d = a+b+c
let f = ((a+b+c)/3).toFixed(0)

console.log(`${d}
${f}`)