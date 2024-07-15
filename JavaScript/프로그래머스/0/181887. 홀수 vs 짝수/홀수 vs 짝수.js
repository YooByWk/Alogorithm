function solution(num_list) {
    let evenSum = 0 
    let oddSum = 0 
    let even = num_list.filter((_,idx) => {
        if (idx % 2 === 0 )  {
            oddSum += num_list[idx]
        }
    })
    let odd = num_list.filter((_,idx) => {
                if (idx % 2 === 1 )  {
            evenSum += num_list[idx]
        }
    })
    return oddSum > evenSum ? oddSum : evenSum;
}