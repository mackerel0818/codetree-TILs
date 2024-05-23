const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim());

if(input < 500){
    console.log('no')
}else if(input <1000){
    console.log('pen')
}else if(input<3000){
    console.log('mask')
}else {
    console.log('book')
}