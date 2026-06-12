function getIndexToIns(array, number) {
  let sA = array.sort((a, b) => a-b);
  let index = sA.findIndex(num => num >= number);
  if(index == -1) {
    index = sA.length;
  }
  return index;
}
 
console.log(getIndexToIns([3, 10, 5], 11));
