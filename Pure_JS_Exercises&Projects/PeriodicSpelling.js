function getPeriodicSpelling(word) {
  let symbols = ["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og"];
 
  const map = new Map();
  for(const symbol of symbols) {
    map.set(symbol.toLowerCase(), symbol);
  }
 
  word = word.toLowerCase();
 
  function dfs(index) {
    if(index === word.length){
      return [];
    }
 
    //Trying 1 letter
    const one = word.slice(index, index+1);
    if(map.has(one)) {
      const rest = dfs(index+1);
      if(rest !== null) {
        return [map.get(one), ...rest];
      }
      }   
    }
}
