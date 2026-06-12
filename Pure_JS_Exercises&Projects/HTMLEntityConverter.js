function convertHTML(string) {
  let objA = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };

  let sA = string.split("");
  for(let i = 0; i<sA.length; i++) {
    if(Object.hasOwn(objA, sA[i])) {
      let str = sA[i].toString();
      console.log(str);
      sA[i] = objA[`${str}`];
      continue;
    }
  }
  return sA.join("");
}

console.log(convertHTML('Stuff in "quotation marks"'));
