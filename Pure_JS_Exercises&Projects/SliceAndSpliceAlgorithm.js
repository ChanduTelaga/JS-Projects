function frankenSplice(arr1, arr2, index) {
  const cp_arr1 = [...arr1];
  const cp_arr2 = [...arr2];
  let index1 = index;
  for(let i = 0; i<cp_arr1.length; i++) {
    cp_arr2.splice(index1, 0, cp_arr1[i]);
    index1++;
  }
  return cp_arr2;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));