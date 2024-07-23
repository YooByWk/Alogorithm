function solution(rank, attendance) {
    let attd = []
    for (let i = 0; i < rank.length; i++) {
        if(attendance[i]===true) {
            attd.push({rank: rank[i], index: i})
        }
    }
    attd.sort((a,b) => a.rank - b.rank)
    let selected = attd.slice(0,3)
    let answer = selected[0].index * 10000 + selected[1].index * 100 + selected[2].index;
    
    return answer;
}