from itertools import combinations


def solution(n, q, ans):
    possible_codes = list(combinations(range(1, n+1), 5))  # 1~n에서 5개 뽑기
    valid_count = 0

    for code in possible_codes:
        valid = True
        for i in range(len(q)):
            if sum(1 for num in q[i] if num in code) != ans[i]:  # 조건 검사
                valid = False
                break
        if valid:
            valid_count += 1  # 조건을 만족하는 코드 개수 증가

    return valid_count
