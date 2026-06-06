function pairElement(string) {
  let sA = string.split("");
  let aA = [];
  for(let i = 0; i<sA.length; i++) {
    if(sA[i] == 'A') {
      aA.push(["A", "T"]);
    }else if(sA[i] == 'T') {
      aA.push(['T','A']);
    }else if(sA[i] == 'C') {
      aA.push(['C','G']);
    }else {
      aA.push(['G','C']);
    }
  }

  return aA;
}

console.log(pairElement("ATCGA"));