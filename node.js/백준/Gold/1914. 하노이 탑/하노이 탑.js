const N = parseInt(require("fs").readFileSync(0).toString().trim())

const count = 2n ** BigInt(N) - 1n
const AnsBuffer = []

if (N > 20) {
  console.log(count.toString())
} else {
  hanoi(N, 1, 3, 2)
  console.log(count.toString())
  console.log(AnsBuffer.join("\n").trim())
}

function hanoi(num, start, target, other) {
  if (num === 0) return

  hanoi(num - 1, start, other, target)
  AnsBuffer.push(`${start} ${target}`)
  hanoi(num - 1, other, target, start)
}
