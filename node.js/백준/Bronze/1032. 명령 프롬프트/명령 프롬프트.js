const fs = require("fs");

function solution() {
    const input = fs.readFileSync(0, "utf8").toString().trim().split("\n")
    const N = parseInt(input[0].trim());
    const files = input.slice(1).map(line => line.trim()); 
    
    if (N === 1) {
        console.log(files[0]);
        return;
    }

    let pattern = files[0].split('');
    const length = pattern.length;

    for (let i = 1; i < N; i++) {
        const currentFile = files[i];

        for (let j = 0; j < length; j++) {
            
            if (pattern[j] === '?') {
                continue;
            }

            if (pattern[j] !== currentFile[j]) {
                pattern[j] = '?';
            }
        }
    }

    console.log(pattern.join(''));
}

solution();