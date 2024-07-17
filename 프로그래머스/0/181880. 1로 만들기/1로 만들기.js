function solution(num_list) {
    let answer = 0;

    while (!isAllOnes(num_list)) {
        num_list = num_list.map((el) => {
            if (el % 2 === 0 && el !== 1) {
                answer++
                return el / 2
            }
            if (el % 2 === 1 && el !== 1) {
                answer++
                return (el - 1) / 2
            }
            return el
        })
    }

    return answer;
}

function isAllOnes (arr) {
    let flag = false
    if (arr.every((el) => el === 1)) {
        flag = true
    }
    return flag
        
}