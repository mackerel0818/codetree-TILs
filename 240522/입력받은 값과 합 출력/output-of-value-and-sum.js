const fs = require("fs");
let input = fs.readFileSync(0).toString();
let arr = input.split(" ")
let a = Number(arr[0])
let b = Number(arr[1])
let c = a+b

console.log(a, b, c);