function getRentalCost(rented, returned, tier) {
  const prices = {
    1: { bc: 4.99, lFPR: 3.99 },
    3: { bc: 3.99, lFPR: 2.99 },
    7: { bc: 2.99, lFPR: 0.99 }
  };
 
  const start = new Date(rented);
 
  const dueDate = new Date(start);
  dueDate.setUTCDate(dueDate.getUTCDate() + tier);
  dueDate.setUTCHours(12, 0, 0, 0); // noon UTC
 
  const returnedDate = new Date(returned);
 
  let lateDays = 0;
 
  if (returnedDate > dueDate) {
    lateDays = Math.ceil(
      (returnedDate - dueDate) / (1000 * 60 * 60 * 24)
    );
  }
 
  const cost =
    prices[tier].bc +
    lateDays * prices[tier].lFPR;
 
  return `$${cost.toFixed(2)}`;
}