function bouncer(array) {
  let arrayCP = [...array];
  let falsyVal = [false, null, 0, "", undefined, NaN];
  for(let i = arrayCP.length - 1; i >= 0; i--) {
    if(falsyVal.includes(arrayCP[i])) {
      arrayCP.splice(i, 1);
    }
  }

  return arrayCP;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));