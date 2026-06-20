function primeFactorization(n) {
  let factors = [];
  if(isPrime(n)) {
    factors.push(n);
    return factors;
  }
 
  for(let i = 2; isPrime(i); i++) {
  }
 
 
  return factors;
}
 
function isPrime(n) {
  if(n <=1) {
    return false;
  }
  for(let i = 2; i< Math.sqrt(n); i++) { {
    if(n%i == 0) {
      return false;
    }
  }
    return true;
  }
}