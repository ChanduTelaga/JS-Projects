function pyramid(char, num, bool) {
  let result = ""
  if(bool) {
    for(let i = num; i>=1; i--) {
      result +="\n";
      result += " ".repeat(num - i);
      result += char.repeat(2*i-1);
    }
  }else {
    for(let i = 1; i<=num; i++) {
      result +="\n";
      result += " ".repeat(num - i);
      result += char.repeat(2*i-1);
    }
  }

  return result+"\n";
}

console.log(pyramid("o", 4, false))