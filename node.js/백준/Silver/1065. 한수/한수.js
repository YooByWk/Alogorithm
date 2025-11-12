const fs = require("fs")
const N = fs.readFileSync(0).toString().trim()
let ans = 0

for (let i = 1; i <= N; i++) {
  if (i < 100) {
    ans++
    continue
  }
  if (num_test(i)) {
    ans++
  }
}

console.log(ans)

/**
 * 하나하나 해보는 편
 * @param {number} target
 */
function num_test(target) {
  const st_num = target.toString().split("")

  const st_num_len = st_num.length
  const first_diff = st_num[0] - st_num[1]

  for (let i = 1; i < st_num_len - 1; i++) {
    const cur_diff = st_num[i] - st_num[i + 1]
    if (cur_diff !== first_diff) {
      return false
    }
  }

  return true
}
