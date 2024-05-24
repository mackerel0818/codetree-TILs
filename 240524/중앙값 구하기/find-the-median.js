let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])
let d

if (a < b) {
    if(b < c) {
        if(c < a){
            console.log(c)
        }
    }
}

if (b < a) {
    if(a < c) {
        if(c > b){
            console.log(a)
        }
    }
}

if (a < b) {
    if(b < c) {
        if(a < c){
            console.log(b)
        }
    }
}