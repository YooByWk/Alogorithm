function solution(dart) {
    var answer = 0;
    var tmp = 0
    var checked = []
    var cnt = -1
    for (let i = 0; i < dart.length; i++) {
           
        if (!isNaN(dart[i])) {
            tmp = Number(dart[i]) === 0 && Number(dart[i-1]) === 1 ? 10 : Number(dart[i])
        } else if (dart[i] === 'S') {
            checked.push(tmp)
            cnt += 1 
        } else if (dart[i] === 'D') {
            checked.push(Math.pow(tmp,2))
            cnt += 1 
        } else if (dart[i] === 'T') {
            checked.push(Math.pow(tmp,3))
            cnt += 1
        }
        else if (dart[i] === '*') {
            checked[cnt] = checked[cnt] * 2  
            checked[cnt-1] = checked[cnt-1] * 2 
            
        } else if (dart[i] === '#') {
            checked[cnt] = checked[cnt] * -1   
                      
        }
    }
    answer = checked.reduce((a,c) => a + c)
    
    return answer;
}