function destroyer(arr1, ...args) {
  return arr1.filter((num) => {
      return !args.includes(num);
  })
}
 
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3) );
