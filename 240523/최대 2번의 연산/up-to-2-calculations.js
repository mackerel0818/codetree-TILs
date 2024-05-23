const fs = require('fs');
let input = Number(fs.readFileSync(0).toString());

if (input % 2 === 0) {
    input = parseInt(input / 2)
}

if (input % 2 === 1) {
  input = parseInt((input+1)/2)
}

console.log(input);