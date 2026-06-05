function uniteUnique(...args) {
  let uniqArray = [];
  for(let arg of args) {
    for(let i = 0; i<arg.length; i++) {
      if(uniqArray.includes(arg[i])) {
        continue
      }else {
        uniqArray.push(arg[i]);
      }
    }
  }
 
  return uniqArray;
}
 
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));