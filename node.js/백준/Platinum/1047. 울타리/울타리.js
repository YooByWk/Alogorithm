const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

class Tree {
    constructor(x, y, fence) {
        this.x = x;
        this.y = y;
        this.fence = fence;
    }
}

function solution() {
    const n = parseInt(input[0]);
    const trees = [];

    for (let i = 0; i < n; i++) {
        const baseIndex = 1 + i * 3;
        const x = parseInt(input[baseIndex]);
        const y = parseInt(input[baseIndex + 1]);
        const fence = parseInt(input[baseIndex + 2]);
        trees.push(new Tree(x, y, fence));
    }
    
    const minCuts = bruteforce(n, trees);
    console.log(minCuts);
}

function bruteforce(n, trees) {
    let minCuts = n; 

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                for (let l = 0; l < n; l++) {
                    const minX = trees[i].x;
                    const maxX = trees[j].x;
                    const minY = trees[k].y;
                    const maxY = trees[l].y;

                    if (minX > maxX || minY > maxY) {
                        continue;
                    }

                    const curCuts = countCuts(n, trees, minX, maxX, minY, maxY);
                    minCuts = Math.min(minCuts, curCuts);
                }
            }
        }
    }

    return minCuts;
}

function countCuts(n, trees, minX, maxX, minY, maxY) {
    const width = maxX - minX;
    const height = maxY - minY;
    const reqs = 2 * (width + height);

    let curCuts = 0;
    let curMaterial = 0;
    const possibleCutTrees = [];

    for (const tree of trees) {
        const isInside = tree.x >= minX && tree.x <= maxX && tree.y >= minY && tree.y <= maxY;

        if (isInside) {
            possibleCutTrees.push(tree.fence);
        } else {
            curCuts += 1;
            curMaterial += tree.fence;
        }
    }

    if (curMaterial >= reqs) {
        return curCuts;
    }

    let deficit = reqs - curMaterial;

    possibleCutTrees.sort((a, b) => b - a);

    for (const material of possibleCutTrees) {
        curCuts += 1;

        if (material >= deficit) {
            return curCuts;
        } else {
            deficit -= material;
        }
    }
    
    return n;
}

solution();