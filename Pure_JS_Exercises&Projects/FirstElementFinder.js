function findElement(array, func) {
  for(let i = 0; i<array.length; i++) {
    if(func(array[i])) {
      return array[i];
    }
  }
  return undefined;
}

console.log(findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; }));