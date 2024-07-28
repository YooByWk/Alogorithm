function solution(quiz) {
    return quiz.map(el => {
        let [X, op, Y, eq, Z] = el.split(' ')
        
        X = Number(X)
        Y = Number(Y)
        Z = Number(Z)

        let res = 0
        
        if (op === '+') {
            res = X + Y
        } else if (op === '-') {
            res = X - Y
        }
        return res === Z ? "O" : "X"
    })
    
}