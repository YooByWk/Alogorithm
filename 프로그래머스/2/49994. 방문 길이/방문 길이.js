function solution(dirs) {
    // 처음 걸어본 곳만 중요하다. 
    const visited = new Set();
    
    let curLoc = [5,5];
    
    // 하나씩 처리한다.
    for (dir of dirs) {
        // 새롭게 이동할 곳을 설정해준다.
        const [x,y] = [...curLoc];
        let [nx, ny] = move(dir, ...curLoc);
        const isValid = checkMove(nx, ny)
        
        // 불가능한 이동은 넘어간다.
        if (!isValid) continue;
        
        
        // 가능한 경우만 남는다.
        // 한번이라도 방문한 경우 (해당 길을 걸어봄)는 미리 반대 경우를 추가하여 해소한다. 
        visited.add(`${x}${nx}-${y}${ny}`)
        visited.add(`${nx}${x}-${ny}${y}`)
        curLoc = [nx,ny]
        
    }
    return visited.size / 2 ;
}

// 다음 이동이 내부에 있는지 확인 -5 5, -5 -5 , 5,5 5,-5 로 이루어진 좌표평면
// 원점을 5,5 로 변경하자 -> 음수 판단이 귀찮은 문제.
// 즉 [0,0], [0,10], [10,10], [10,-10]이 새로운 범위가 된다
function checkMove(nx, ny) {
    const isValidX = nx >= 0 && nx <= 10;
    const isValidY = ny >= 0 && ny <= 10;
    
    return isValidX && isValidY;
    
}

// 움직인 결과를 리턴해주는 곳
function move (dir, x, y) {
    switch (dir){
        case "U":
            return [x, y + 1];
        case "D":
            return [x, y - 1];
        case "R":
            return [x + 1, y];
        case "L":
            return [x -1, y];
        default:
            return;
    }
}

