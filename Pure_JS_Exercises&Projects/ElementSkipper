function dropElements(arr, func) {
  let arr1 = [...arr];
  for(let i = 0; i<arr1.length; i++) {
    if(!func(arr1[i])) {
      arr1.splice(i, 1);
      i--;
    }else {
      break;
    }
  }

  return arr1;
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
