def solution(players, callings):
    # 선수 이름과 현재 인덱스를 매핑
    pos = { player: i for i, player in enumerate(players) }
    
    for calling in callings:
        # 호출된 선수의 현재 인덱스
        current_index = pos[calling]

        # 바로 앞 선수의 이름
        front_player = players[current_index - 1]
        
        # 선수들의 위치 교환
        players[current_index - 1], players[current_index] = players[current_index], players[current_index - 1]
        
        # 딕셔너리 업데이트
        pos[calling] = current_index - 1
        pos[front_player] = current_index

    return players
