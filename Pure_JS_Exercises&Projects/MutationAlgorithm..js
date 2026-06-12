function mutation(array) {
  let string1 = array[0].toLowerCase();
  let string2_a = array[1].toLowerCase().split("");
  
  for(let i = 0; i<string2_a.length; i++) {
    if(!string1.includes(string2_a[i])) {
      return false
    }
  }

  return true;
}

console.log(mutation(["hello", "neo"]));