function makeLeet(str) {
  let subs = {
    "a": 4,
    "e": 3,
    "g": 9,
    "i": 1,
    "l": 1,
    "o": 0,
    "s": 5,
    "t": 7
  }
  
  let strArr = str.split("");
  console.log(strArr);

  for(let i = 0; i<strArr.length; i++) {
    if(Object.hasOwn(subs, strArr[i].toLowerCase())) {
      strArr[i] = subs[strArr[i].toLowerCase()];
    }
  }

  return strArr.join("");
}

console.log(makeLeet("cool"));