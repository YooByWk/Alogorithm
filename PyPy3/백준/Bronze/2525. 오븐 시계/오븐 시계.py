# 입력
A, B = map(int, input().split())  # 현재 시각
C = int(input())                  # 요리 시간

# 계산
total_minutes = A * 60 + B + C
hour = (total_minutes // 60) % 24  # 24시간제 처리
minute = total_minutes % 60

# 출력
print(hour, minute)
