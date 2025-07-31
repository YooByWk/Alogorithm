import Foundation

// 표준 입력에서 한 줄을 읽어 Int64 타입으로 변환합니다.
// readLine()은 Optional<String>을 반환하므로 nil일 경우에 대비합니다.
guard let input = readLine(), let n = Int64(input) else {
    // 입력이 잘못된 경우 프로그램을 종료하거나 오류를 처리합니다.
    fatalError("입력 형식이 잘못되었습니다.")
}

// 사용자님께서 유도한 공식을 Int64 타입으로 계산합니다.
// Swift는 타입에 엄격하므로, 모든 변수가 같은 타입인지 확인하는 것이 좋습니다.
let sum = (n + 1) * n * (n - 1) / 2

// 결과를 출력합니다.
print(sum)