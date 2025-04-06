function solution(cards1, cards2, goal) {
    let answer = '';
    
    let lenCards1 = cards1.length
    let lenCards2 = cards2.length
    
    let curCard1 = 0
    let curCard2 = 0
    let curLen = 0

    while (curLen < goal.length) {
        if (goal[curLen] === cards1[curCard1] ) {
            curCard1++
            curLen++
            // console.log(true,'첫', goal[curLen], cards1[curCard1])
        } else if (goal[curLen] === cards2[curCard2]) {
            curCard2++
            curLen++
            // console.log(true,'두번')
        } else {
            return answer = "No"
        }
        
        
        
    }
    console.log(curCard1, curCard2)
    
    return answer = "Yes"
}