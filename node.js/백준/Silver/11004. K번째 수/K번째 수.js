
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const N = Number(input[0]);
const K = Number(input[1]);

const arr = input.slice(2).map(Number);

arr.sort((a, b) => a - b);

console.log(arr[K - 1]);