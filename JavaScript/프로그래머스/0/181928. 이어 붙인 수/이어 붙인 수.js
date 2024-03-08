function solution(num_list) {
    var answer = 0;
    var oddNum = ''
    var evenNum = ''
    num_list.forEach((x)=> {
        switch (x % 2){
            case 1 :
                oddNum += String(x)
                break
            case 0 :
                evenNum += String(x)
                break
        };
    })
    return Number(oddNum) + Number(evenNum);
}