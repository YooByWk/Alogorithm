const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let H = parseInt(input[0]);
let M = parseInt(input[1]);

// 45분을 빼는 로직
M -= 45;
if (M < 0) {
    M += 60;  // 분이 음수가 되면 60분을 더하고
    H--;      // 시간을 한 시간 줄인다
}

if (H < 0) {
    H = 23;   // 시간이 음수가 되면 23시로 변경
}

console.log(H, M);
