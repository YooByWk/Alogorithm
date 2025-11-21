const input = require("fs").readFileSync(0).toString().trim()

sol(input)

/**
 * ### 백준 S2 - 23304 : 아카라카
 * @param {string} word
 * @returns void
 */
function sol(word) {
  if (isAkaraka(word)) {
    console.log("AKARAKA")
  } else {
    console.log("IPSELENTI")
  }
}

/**
 * 아카라카 팰린드롬인지 재귀적으로 확인
 * @param {string} word
 * @returns {boolean}
 */
function isAkaraka(word) {
  const len = word.length

  if (len <= 1) {
    return true
  }

  if (!isPalindrome(word)) {
    return false
  }

  const prefixLen = Math.floor(len / 2)

  const prefix = word.substring(0, prefixLen)
  const suffix = word.substring(len - prefixLen, len)

  return isAkaraka(prefix) && isAkaraka(suffix)
}

/**
 * @param {string} word
 * @returns {boolean}
 */
function isPalindrome(word) {
  let left = 0
  let right = word.length - 1

  while (left < right) {
    if (word[left] !== word[right]) {
      return false
    }
    left++
    right--
  }
  return true
}
