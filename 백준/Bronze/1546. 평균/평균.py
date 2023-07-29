#기말고사 #조작함 
#  최대 = M 
#  점수/ 최고점수 * 100 # 새롭게 평균
veces = int(input())
nota = list(map(int, input().split()))
M = max(nota)
S = 0 
for i in nota:
    S += i / M * 100
pm = S /veces
print(pm)
