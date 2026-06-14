function smallestCommons(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);
  let multiple = max;

  for(let i= min; i<max; i++) {
    if(multiple%i !== 0) {
      multiple += max;
      i = min - 1;
    }else if(i == max) {
      return multiple;
    }
  }
  return multiple;
}

console.log(smallestCommons([5, 1]));