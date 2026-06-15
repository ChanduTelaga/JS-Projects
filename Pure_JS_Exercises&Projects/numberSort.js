function sortNumbers(str) {
  str = str.split(',');
  for(let i = 0; i<str.length; i++) {
    str[i] = Number(str[i])
  }
  str = str.sort((a,b) => a-b);
  return str;
}

console.log(sortNumbers("3,1,2"))