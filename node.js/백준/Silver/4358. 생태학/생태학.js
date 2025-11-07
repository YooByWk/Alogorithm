const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let total = input.length; 

let dic = new Map();

for (let tree of input) {
    const trimmedTree = tree.trim(); 
    
    if (trimmedTree.length > 0) { 
        dic.set(trimmedTree, (dic.get(trimmedTree) || 0) + 1);
    } 
    if (tree.trim().length > 0) {
        dic.set(tree.trim(), (dic.get(tree.trim()) || 0) + 1);
    }
} 

const finalInput = input.map(line => line.trim()).filter(line => line.length > 0);
const finalTotal = finalInput.length;
const finalDic = new Map();

for (const tree of finalInput) {
    finalDic.set(tree, (finalDic.get(tree) || 0) + 1);
}

let result = [];
for (let [treeName, count] of finalDic) {
    let per = ((count / finalTotal) * 100).toFixed(4);
    result.push(`${treeName} ${per}`);
}

result.sort();
console.log(result.join("\n"));