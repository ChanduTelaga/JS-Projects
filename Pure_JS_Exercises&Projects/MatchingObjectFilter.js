function whatIsInAName(arr1, objSrc) {
  return arr1.filter(obj => Object.keys(objSrc).every(key => obj[key] == objSrc[key]));
}
 
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
