function solution(n, q, ans) {
    function getCombinations(arr, selectNum) {
        if (selectNum === 0) return [[]];
        if (arr.length === 0) return [];
        
        const [first, ...rest] = arr;
        const withFirst = getCombinations(rest, selectNum - 1).map(comb => [first, ...comb]);
        const withoutFirst = getCombinations(rest, selectNum);
        
        return [...withFirst, ...withoutFirst];
    }

    // 1부터 n까지의 수에서 5개를 선택하는 모든 조합 생성
    const allCombinations = getCombinations([...Array(n).keys()].map(x => x + 1), 5);
    let validCount = 0;

    for (const combination of allCombinations) {
        let isValid = true;

        for (let i = 0; i < q.length; i++) {
            const matchCount = q[i].filter(num => combination.includes(num)).length;
            if (matchCount !== ans[i]) {
                isValid = false;
                break;
            }
        }

        if (isValid) validCount++;
    }

    return validCount;
}
