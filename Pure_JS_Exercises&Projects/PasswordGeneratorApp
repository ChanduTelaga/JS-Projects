function generatePassword(length) {
  let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = ""
  let sA = string.split("");
  for(let i = 0; i<length; i++) {
    password += sA[Math.floor(Math.random()*i)+1];
  }
  console.log(`Generated password: ${password}`);
  return password;
}

let password = generatePassword(9);
console.log(password);