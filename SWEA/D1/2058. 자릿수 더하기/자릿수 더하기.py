num = int(input())

sum = 0 

lst = list(map(int, str(num))) #자리별로 받아놓기
for i in lst: #리스트 순회공연
    sum += i 
print(sum)
    