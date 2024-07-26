function solution(n) {
    var answer = [[]];
    let arr = new Array(n).fill().map(() => new Array(n).fill(-1));
    const directions = [
        [0,1], // 우
        [1,0], // 하 
        [0,-1], // 좌
        [-1,0] // 상
    ]
    let curNum  = 1
    let curDir = 0
    let row = 0, col = 0
    while (curNum <= n * n) {
        arr[row][col] = curNum++
        
        let newRow = row + directions[curDir][0]
        let newCol = col + directions[curDir][1]
        
        if (newRow < 0 || newRow >= n || newCol < 0 || newCol >= n || arr[newRow][newCol] !== -1 ){
            curDir = (curDir + 1) % 4
            newRow = row + directions[curDir][0]
            newCol = col + directions[curDir][1]
        }
        row = newRow
        col = newCol
    }
    
    
    return arr;
}