let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let test = input[0].split(' ')
let test2 = input[1].split(' ')
let a = Number(test[0])
let b = Number(test[1])
let c = Number(test2[0])
let d = Number(test2[1])

if (a>c && b>d) {
    console.log(1);
}
else {
    console.log(0);
}