const input = parseInt(require("fs").readFileSync(0).toString().trim())

sol(input)

/**
 *
 * @param {number} input
 */
function sol(input) {
  const arr = []

  // p 0 ~ 2
  arr.push(0n)
  arr.push(1n)
  arr.push(1n)

  if (input === 1) {
    console.log(arr[1].toString())
    return
  }
  if (input === 2) {
    console.log(arr[2].toString())
    return
  }

  let n = 3

  while (n <= input + 1) {
    arr.push(arr[n - 1] + arr[n - 2])
    n++
  }
  console.log(arr[input].toString())
  return
}
