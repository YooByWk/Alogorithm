function solution(arr) {
    var answer = 0;
    let prev = arr.slice(); 

    while (true) {
        let post = prev.map((el) => {
            if (el >= 50 && el % 2 === 0) {
                return el / 2;
            } else if (el < 50 && el % 2 === 1) {
                return el * 2 + 1;
            } else {
                return el;
            }
        });

        if (prev.every((el, idx) => el === post[idx])) {
            break;
        }

        answer += 1;
        prev = post; 
    }

    return answer;
}
