function solution(name, yearning, photo) {
  const scoreMap = {};
  for (let i = 0; i < name.length; i++) {
    scoreMap[name[i]] = yearning[i];
  }
  
  return photo.map(personArr => {
    let sum = 0;
    for (const person of personArr) {
      if (scoreMap[person] !== undefined) {
        sum += scoreMap[person];
      }
    }
    return sum;
  });
}