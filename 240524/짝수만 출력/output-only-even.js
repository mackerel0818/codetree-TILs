const fs = require("fs");
let input = fs.readFileSync(0).toString().split(' ')
let a = Number(input[0])
let b = Number(input[1])
let list = [];

let i = a

while(i <= b){
    if(i % 2 === 0){
        list.push(i)
    }
    i++
}

console.log(list.join(' '));