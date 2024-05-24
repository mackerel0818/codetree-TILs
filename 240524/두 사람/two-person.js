let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let input0 = input[0].split(' ')
let input1 = input[1].split(' ')

let a = Number(input0[0])
let b = input0[1]
let c = Number(input1[0])
let d = input1[1]

if ((a >= 19 && b == 'M') || (c >= 19 && d == 'M')) {
    console.log(1);
}
else {
    console.log(0);
}