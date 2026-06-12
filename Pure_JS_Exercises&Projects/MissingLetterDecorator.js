function fearNotLetter(string) {
  const firstCode = string.charCodeAt(0);

  for(let i = 0; i<string.length; i++) {
    const currentCode = string.charCodeAt(i);
    if(currentCode !== firstCode+i) {
      return String.fromCharCode(currentCode -1)
    }
  }
  return undefined;
  
}

console.log(fearNotLetter("bcdf"));