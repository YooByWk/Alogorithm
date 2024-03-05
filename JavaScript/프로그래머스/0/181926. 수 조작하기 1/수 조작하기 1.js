function solution(n, control) {
    var ans = n;
    let c = [...control] // control을 받아서 리스트로 변환
    c.forEach((i) => {
        switch(i) {
            case 'w':
                ans += 1;
                break;
            case 's':
                ans -= 1;
                break;
            case 'd':
                ans += 10;
                break;
            case 'a':
                ans -= 10;
                break
        }

    })
    return ans;
}