const fs = require("fs");

let ft = fs.readFileSync(0).toString();
ft = Number(ft);

console.log((ft*30.48).toFixed(1))