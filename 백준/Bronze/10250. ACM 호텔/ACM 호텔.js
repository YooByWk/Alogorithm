const fs = require("fs")

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const T = Number(input[0]) 

let finalResult = ""

const testCases = input.slice(1); 

for (let i = 0; i < T; i++) {
  const [H, W, N] = testCases[i].split(" ").map(Number);
  
  let floor;     
  let room_num; 

  if (N % H === 0) {
    floor = H;
    room_num = N / H; 
  } else {
    floor = N % H;
    room_num = Math.floor(N / H) + 1; 
  }

  const formatted_room_num = room_num < 10 ? "0" + room_num.toString() : room_num.toString();

  finalResult += `${floor}${formatted_room_num}\n`;
}

console.log(finalResult);