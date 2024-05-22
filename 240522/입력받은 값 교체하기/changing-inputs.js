const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ")
let arr2 = [Number(arr[1]), Number(arr[0])]

console.log(arr2[0], arr2[1]);