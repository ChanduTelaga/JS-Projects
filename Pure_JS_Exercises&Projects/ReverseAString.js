function reverseString(string) {
  const string1 = string.split("");
  let reverseString = ""
  for(let i = string1.length -1; i>=0; i--) {
    reverseString += string1[i];
  }

  return reverseString;
}

console.log(reverseString("hello"))