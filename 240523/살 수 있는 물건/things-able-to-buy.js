const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if(1000<=n){
    console.log('mask')
}else if(3000<=n){
    console.log('book')
} else{
    console.log('no')
}