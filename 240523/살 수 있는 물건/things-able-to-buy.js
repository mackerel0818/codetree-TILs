const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

if(3000<=n){
    console.log('book')
}else if(1000<=n<3000){
    console.log('mask')
} else{
    console.log('no')
}