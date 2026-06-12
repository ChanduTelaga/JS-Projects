function chunkArrayInGroups(array, num) {
  
  let array_2d = [];

  for(let i = 0; i<array.length; i+=num) {
    let array1 = [];
    for(let j = i; j<num+i && j<array.length; j++) {
      array1.push(array[j]);
    }

    array_2d.push(array1);
  }

  return array_2d;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));