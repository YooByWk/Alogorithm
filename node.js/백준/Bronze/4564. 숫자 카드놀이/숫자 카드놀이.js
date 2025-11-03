const fs = require("fs")

const input = fs.readFileSync(0).toString().trim().split("\n").map(Number)

let answer = ""

/**
 * 주어진 숫자의 각 자릿수를 곱하는 과정을 반복.
 * @param {number} startNum 시작 숫자
 * @returns {string} 게임 과정을 공백으로 구분한 문자열
 */
function cal(startNum) {
    let currentNum = startNum
    let ansLine = `${startNum}`

    while (currentNum >= 10) {
        let nextNum = 1 

        for (const digitChar of String(currentNum)) {
            const digit = Number(digitChar)
            nextNum *= digit
        }

        ansLine += ` ${nextNum}`
        currentNum = nextNum
    }
    return ansLine
}

/**
 * 0인 경우를 체크하고, 0이 아니면 cal 함수를 호출하여 결과를 answer에 누적.
 * @param {number} num 현재 테스트 케이스 숫자
 * @param {function} finalCallback 최종 출력을 담당하는 콜백 
 */
function checkZero(num) {
    if (num === 0) {
        return false 
    }
    
    const resultLine = cal(num)
    answer += resultLine + "\n"
    
    return true
}

function solution(input) {
    for (const num of input) {
        if (num === 0) {
            break;
        }
        
        checkZero(num)
    }

    console.log(answer.trim())
}

solution(input)