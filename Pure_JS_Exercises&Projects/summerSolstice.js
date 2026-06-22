function getDaytimeHours(latitude) {
  let dtH = 12+(latitude/90)*12;
  

  let nEN = Math.round(dtH/2)*2;
  
  dtH = nEN;
  console.log("dtH: "+dtH);
  

  let ntH = 24-dtH;
  console.log("ntH: "+ntH);

  return "🌑".repeat(ntH/2)+"☀️".repeat(dtH)+"🌑".repeat(ntH/2);
}

console.log(getDaytimeHours(66.5))