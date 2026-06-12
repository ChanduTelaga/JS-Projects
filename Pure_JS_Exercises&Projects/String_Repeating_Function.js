function repeatStringNumTimes(string, num) {
  let string1 = ""
  if(num <= 0) {
    return "";
  }else {
    for(let i = 1; i<=num; i++) {
      string1 += string;
    }
  }

  return string1;
}

console.log(repeatStringNumTimes("*", 3))

