const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number); // 현재 시각
const C = parseInt(input[1], 10);              // 요리 시간

const totalMinutes = A * 60 + B + C;
const hour = Math.floor((totalMinutes / 60) % 24); // 24시간제 처리
const minute = totalMinutes % 60;

console.log(hour, minute);
