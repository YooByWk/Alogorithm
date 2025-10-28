function solution(board, moves) {
    let answer = 0;
    
    const boardLen = board.length
    const lineLen = board[0].length
    
    const boardByLineIdx = []
    
    for (let line = 0; line < lineLen; line++ ) {
        const tmp = []
        
        for (let depth = 0  ;  depth < boardLen ; depth++ ) {
            const curDoll = board[depth][line]
            if (curDoll !== 0) {
                tmp.push(curDoll)
            }
        }
        boardByLineIdx.push(tmp.reverse())
    }
    
    
    const basket = []
    
    for (const move of moves) {
        const lineIdx = move - 1
        
        // 인형이 없는 경우 아무 일 없음.
        if (boardByLineIdx[lineIdx].length <= 0) {
            continue
        }
        
        const curTarget = boardByLineIdx[lineIdx].pop()
        
        if (basket.length > 0 && basket[basket.length - 1] === curTarget) {
            basket.pop()
            answer += 2;
        } else {
            basket.push(curTarget)
        }
        
    }
    
    return answer;
}

