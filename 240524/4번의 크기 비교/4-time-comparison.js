let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = Number(input[0])
let input1 = input[1].split(" ");
let b = Number(input1[0])
let c = Number(input1[1])
let d = Number(input1[2])
let e = Number(input1[3])

if (a>b) {
    console.log(1);
}
else {
    console.log(0);
}

if (a>c) {
    console.log(1);
}
else {
    console.log(0);
}

if (a>d) {
    console.log(1);
}
else {
    console.log(0);
}

if (a>e) {
    console.log(1);
}
else {
    console.log(0);
}