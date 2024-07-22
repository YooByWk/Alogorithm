function solution(strArr) {
    const lengthCount = {};

    for (let str of strArr) {
        const length = str.length;
        lengthCount[length] = (lengthCount[length] || 0) + 1;
    }

    return Math.max(...Object.values(lengthCount));
}
