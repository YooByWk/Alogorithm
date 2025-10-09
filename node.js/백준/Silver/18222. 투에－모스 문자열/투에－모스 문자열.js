const fs = require("fs")
const k = BigInt(fs.readFileSync("dev/stdin").toString())


function sol(k) {
  if (k === 1n) return 0

  let half = 1n

  while (half * 2n < k) {
    half = half * 2n
  }
  // 앞쪽 절반에 해당한다.
  // 정보 가공 없이 다음 단계로 넘어간다.
  // 추후 절반을 넘어간다면 결과가 뒤집힌다.
  if (k <= half) {
    return sol(k)
  }
  // 이미 뒤쪽 절반에 해당한다.
  // 즉 뒤집힌 결과이므로, 올라가며 결과를 뒤집어준다.
  else {
    const next_k = k - half
    return 1 - sol(next_k)
  }
}
console.log(sol(k))
