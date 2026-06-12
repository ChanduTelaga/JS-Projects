let inventory = [];
 
function findProductIndex(prodName) {
  let lower = prodName.toLowerCase();
  for(let i = 0; i<inventory.length; i++) {
    if(inventory[i].name.toLowerCase() === lower) {
      return i;
    }
  }
  return -1;
}
 
function addProduct(prodObj) {
  let name1 = prodObj.name.toLowerCase();
  let quantity1 = prodObj.quantity;
  let present = false;
  for(let i = 0; i<inventory.length; i++) {
    if(inventory[i].name.toLowerCase() === name1) {
      present = true;
      inventory[i].quantity += quantity1;
      console.log(`${name1.toLowerCase()} quantity updated`)
    }
  }
  if(!present) {
    inventory.push({
      name: name1,
      quantity: quantity1
    });
    console.log(`${name1.toLowerCase()} added to inventory`)
  }
  return inventory;
}
 
 
function removeProduct (name, quantity) {
  let name1 = name.toLowerCase();
  let qun1 = quantity;
  let present = false;
  for(let i = 0; i<inventory.length; i++) {
    if((inventory[i].name.toLowerCase() === name1) && (inventory[i].quantity-qun1 > 0)) {
      present = true;
      inventory[i].quantity -= qun1;
      console.log(`Remaining ${name1} pieces: ${inventory[i].quantity}`)
    }else if((inventory[i].name.toLowerCase() === name1) && (inventory[i].quantity-qun1 == 0)) {
      present = true;
      inventory.splice(i,1);
    }else if((inventory[i].name.toLowerCase() === name1) && (inventory[i].quantity-qun1 < 0)){
      present = true;
      console.log(`Not enough ${name1} available, remaining pieces: ${inventory[i].quantity}`);
    }
  }
 
  if(!present) {
    console.log(`${name1} not found`);
  }
}
 
console.log(removeProduct("FLOUR", 5))