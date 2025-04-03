function solution(park, routes) {
  const H = park.length;
  const W = park[0].length;
  let startR = 0, startC = 0;
  
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (park[i][j] === 'S') {
        startR = i;
        startC = j;
        break;
      }
    }
  }
  
  let r = startR, c = startC;
  
  for (const route of routes) {
    const [dir, distStr] = route.split(" ");
    const dist = parseInt(distStr);
    let newR = r, newC = c;
    let valid = true;
    
    if (dir === 'N') {
      for (let i = 0; i < dist; i++) {
        newR--;
        if (newR < 0 || park[newR][newC] === 'X') {
          valid = false;
          break;
        }
      }
    } else if (dir === 'S') {
      for (let i = 0; i < dist; i++) {
        newR++;
        if (newR >= H || park[newR][newC] === 'X') {
          valid = false;
          break;
        }
      }
    } else if (dir === 'W') {
      for (let i = 0; i < dist; i++) {
        newC--;
        if (newC < 0 || park[newR][newC] === 'X') {
          valid = false;
          break;
        }
      }
    } else if (dir === 'E') {
      for (let i = 0; i < dist; i++) {
        newC++;
        if (newC >= W || park[newR][newC] === 'X') {
          valid = false;
          break;
        }
      }
    }
    
    if (valid) {
      r = newR;
      c = newC;
    }
  }
  
  return [r, c];
}
