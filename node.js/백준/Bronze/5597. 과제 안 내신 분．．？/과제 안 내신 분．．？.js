const fs = require("fs")

const input = fs
  .readFileSync(0, "utf8") 
  .toString()
  .trim()
  .split("\n")
  .map(Number)

const submittedStudents = input; 

const att = new Array(31).fill(false);
const not = [];

for (const st of submittedStudents) {
    att[st] = true;
}

for (let i = 1; i <= 30; i++) {
  if (att[i] === false) {
    not.push(i);
  }
}

console.log(not[0]);
console.log(not[1]);