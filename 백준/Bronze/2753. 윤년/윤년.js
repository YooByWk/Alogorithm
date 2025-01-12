const fs = require("fs")
const input = fs.readFileSync("/dev/stdin").toString().trim();

function ans (input) {
    const t = parseInt(input);
    
    if ( t % 400 === 0 && t % 4 === 0 ) {
            return 1
        }
    if ( (t % 4 ===0) && ( t % 100 !== 0 ) ) {
        return 1
    }
    return 0 
}

console.log(ans(input))

