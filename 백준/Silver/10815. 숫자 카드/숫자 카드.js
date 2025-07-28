// Node.js (백준 10815번 '숫자 카드' 문제 풀이)

const readline = require('readline'); // 입력 처리를 위한 모듈
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line); // 한 줄씩 입력받아 배열에 저장
}).on('close', function() {
    const N = parseInt(input[0]); // 첫째 줄 N
    const sangeunCards = new Set(); 
    
    // 상근이 카드들을 Set에 추가
    const sangeunNums = input[1].split(' ').map(Number); // 공백으로 나누고 숫자로 변환
    for (const num of sangeunNums) {
        sangeunCards.add(num);
    }
    
    const M = parseInt(input[2]); // 셋째 줄 M
    const targetNums = input[3].split(' ').map(Number); // 넷째 줄 찾아야 할 카드들
    
    let result = []; // 결과를 저장할 배열
    
    // 찾아야 할 카드들이 Set에 있는지 확인
    for (const num of targetNums) {
        if (sangeunCards.has(num)) {
            result.push(1);
        } else {
            result.push(0);
        }
    }
    
    console.log(result.join(' ')); 
});