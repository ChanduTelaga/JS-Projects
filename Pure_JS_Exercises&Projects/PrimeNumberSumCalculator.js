function sumPrimes(number) {
 
  function isPrime(num) {
    if(num<=1) {
      return false;
    }
 
    for(let i = 2; i<=Math.sqrt(num); i++) {
      if(num %i === 0) {
        return false;
      }
    }
 
    return true
  }
 
  return Array.from(
    {length: number-1}, (_, i)=> i+2
  )
  .filter(isPrime)
  .reduce((sum, prime) => sum+prime, 0);
}
 
console.log(sumPrimes(10))
