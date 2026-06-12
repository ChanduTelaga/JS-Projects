function largestOfAll(array) {
  const largestNumber = [];
  for(let i = 0; i<array.length; i++) {
    let largest = array[i][i];
    for(let j = 0; j<array[i].length; j++) {
      if(array[i][j] > largest) {
        largest = array[i][j];
      }
    }
    largestNumber.push(largest);
  }

  return largestNumber;
}

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));