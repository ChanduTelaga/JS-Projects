function sumAll([n, m]) {
  let sum = 0;
  if(n>m) {
    for(let i = m; i<=n; i++) {
      sum += i;
    }
  }else {
    for(let i = n; i<=m; i++) {
      sum += i;
    }
  }

  return sum;
}
