function diffArray(arr1, arr2) {
  let arr1F = arr1.filter(num => !arr2.includes(num));
  let arr2F = arr2.filter(num => !arr1.includes(num));
  return [...arr1F, ...arr2F];
}
 
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
