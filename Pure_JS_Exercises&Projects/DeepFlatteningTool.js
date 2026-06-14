function steamrollArray(arr) {
   let flattenArr = [];
   for(const item of arr ) {
    if(Array.isArray(item)) {
      flattenArr.push(...steamrollArray(item))
    }else {
      flattenArr.push(item);
    }
   }

   return flattenArr;
}

console.log(steamrollArray([[["a"]], [["b"]]]));