function triageIssue(ms, message) {
  let day = 86400000;
  let msD = ms/day;
  message = message.toLowerCase();
 
  if(msD < 7) {
    return "leave it";
  }else if(msD >= 7 && message.includes("bump")) {
    return "close it";
  }else {
    return "bump it";
  }
}
 
console.log(triageIssue(604800000, "Bumping this"));