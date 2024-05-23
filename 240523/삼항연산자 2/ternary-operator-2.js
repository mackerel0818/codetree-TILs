const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

input==1 ? console.log('t') : console.log('f');