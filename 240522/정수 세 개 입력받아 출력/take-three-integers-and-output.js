const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");
let input2 = input[0].split(" ");

let a = Number(input2[0]);
let b = Number(input2[1])
let c = Number(input[1])

console.log(a, b, c);