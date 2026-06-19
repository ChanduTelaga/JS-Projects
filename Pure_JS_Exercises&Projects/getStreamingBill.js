function getStreamingBill(cart, subscription) {
  let prices = {
    "HD": {"rent": 3.99, "buy": 12.99},
    "4K": {"rent": 5.99, "buy": 19.99}
  };

  let discounts = {
    "none": 0,
    "basic": 0.1,
    "premium": 0.25
  }
  let cost = 0;
  
  for(let i =0; i<cart.length; i++) {
    let basePrice = prices[cart[i].format][cart[i].type];
    let discount = discounts[subscription];

    cost += ((basePrice) - (basePrice*discount));
  }

  return `$${cost.toFixed(2)}`;
}

console.log(getStreamingBill([{ format: "4K", type: "buy" }, { format: "4K", type: "buy" }], "premium") );