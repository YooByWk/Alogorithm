function solution(babbling) {
    var answer = 0;
    const baby  = ['aya', 'ye', 'woo', 'ma']
    for (let babb of babbling) {
        let tmp = babb
        for (babyCan of baby) {
            tmp = tmp.split(babyCan).join(' ')
        }
        if (tmp.trim() === '') {
            answer++
        }
    }
    return answer;
}