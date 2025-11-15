const fs = require("fs")

const i = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((s) => s.trim())

const nums = i.splice(1).map(Number)
let ans = ""

function isPrime(n) {
  if (n <= 1) return false
  if (n <= 3) return true
  if (n % 2 === 0 || n % 3 === 0) return false
  
  for (let i = 5; i * i <= n; i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false
    }
  }
  
  return true
}

function sol(n) {
  let cur = n 

  while (!isPrime(cur)) {
    cur++
  }
  
  return cur
}

for (const n of nums) {
  ans += sol(n)
  ans += "\n"
}

console.log(ans.trim())