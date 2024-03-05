const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = [...input[0]];
    // console.log(str)
    ans = ''
    str.forEach((i)=> {
        // console.log(i, i.toUpperCase)
        // console.log(i === i.toUpperCase())
        if (i === i.toUpperCase()) {
            
            ans += i.toLowerCase()
        } else  {
            ans += i.toUpperCase()
        }
    })
    console.log(ans)
});