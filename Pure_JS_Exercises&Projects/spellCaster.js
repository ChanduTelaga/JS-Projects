function cast(spells) {
  const spellData = {
    f: { category: "destruction", score: 3 },
    l: { category: "destruction", score: 3 },
    i: { category: "control", score: 2 },
    w: { category: "control", score: 2 },
    h: { category: "restoration", score: 1 },
    s: { category: "restoration", score: 1 }
  };
  let multiplier = 1;
  let score = 0;
  let pC = null;
  for(let i = 0; i<spells.length; i++) {
    const data = spellData[spells[i]]
    if(!Object.hasOwn(spellData, spells[i])) {
      score+= 0
    }
 
    if (pC === null) {
      multiplier = 1;
    } else if (data.category === pC) {
      multiplier = 1;
    } else {
      multiplier++;
    }
 
    score+= (data.score * multiplier)
    pC = data.category;
  }
 
  return score;
}
 
console.log(cast("wislhfl"));