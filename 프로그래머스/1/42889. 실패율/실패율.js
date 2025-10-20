function solution(N, stages) {
    
    const challenge = new Array(N + 2).fill(0)
    
    // 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수
    for (const [i,stage] of stages.entries()) {
        challenge[stage] += 1
        // console.log(i,stage)
    }

    // 실패한 사용자
    const fails = {}
    let total = stages.length
    for (let i = 1 ; i <= N ; i++) {
        if (challenge[i] === 0) {
            fails[i] = 0;
            continue
        }
        fails[i] = challenge[i] / total
        total -= challenge[i]
    }
    const res = Object.entries(fails).sort((a,b) => b[1] - a[1])
    
    return res.map((e) => Number(e[0]))
    
}