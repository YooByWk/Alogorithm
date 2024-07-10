function solution(array) {
    var answer = 0;

    // 각 요소의 발생 빈도를 저장할 Map 객체 생성
    let obj = new Map();
    array.forEach((el) => {
        if (obj.get(el)) {
            obj.set(el, obj.get(el) + 1);
        } else {
            obj.set(el, 1);
        }
    });

    // 카운트 
    let maxCount = 0;
    obj.forEach((count) => {
        if (count > maxCount) {
            maxCount = count;
        }
    });

    // 최대 빈도수 중복 확인
    let modeElements = [];
    obj.forEach((count, key) => {
        if (count === maxCount) {
            modeElements.push(key);
        }
    });

    // 최빈값
    if (modeElements.length > 1) {
        answer = -1;
    } else {
        answer = modeElements[0];
    }

    return answer;
}
