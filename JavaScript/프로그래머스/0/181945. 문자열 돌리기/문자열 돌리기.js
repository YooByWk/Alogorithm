const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    lst = [...input[0]];
    lst.forEach((i)=> {
        console.log(i)
    })
});