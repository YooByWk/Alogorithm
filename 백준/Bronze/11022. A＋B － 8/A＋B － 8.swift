import Foundation

let T = Int(readLine()!)!

var result = ""

for i in 1...T {
    let line = readLine()!.split(separator: " ").map { Int($0)! }
    
    let A = line[0]
    let B = line[1]
    
    let sum = A + B
    
    result += "Case #\(i): \(A) + \(B) = \(sum)\n"
}

print(result)