function isValidCard(number) {
  let digits = number.split('').map(Number);

  let sum = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

    // Double every second digit from the right
    if ((digits.length - i) % 2 === 0) {
      digit *= 2;

      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}


console.log(isValidCard("371449635398431"));

