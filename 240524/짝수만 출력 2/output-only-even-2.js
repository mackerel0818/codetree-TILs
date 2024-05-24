const fs = require("fs");
let input = fs.readFileSync(0).toString().split(' ');
let b = Number(input[0])
let a = Number(input[1])
let list = [];

let i = b

while(i >= a){
    if(i % 2 === 0) {
        list.push(i)
    }
    i--
}

console.log(list.join(' '));