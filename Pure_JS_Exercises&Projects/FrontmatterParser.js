function parseFrontmatter(input) {
  // Remove the --- delimiters
  let content = input.trim().replace(/^---\n/, "").replace(/\n---$/, "");
  
  // Split into lines using \n
  let lines = content.split("\n");
  let result = {};
  
  for (let line of lines) {
    // Find the first colon only
    let idx = line.indexOf(":");
    if (idx === -1) continue; // skip malformed lines
    
    let key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    
    // Type conversion
    if (value === "true") {
      result[key] = true;
    } else if (value === "false") {
      result[key] = false;
    } else if (!isNaN(value) && value !== "") {
      result[key] = value.includes(".") ? parseFloat(value) : parseInt(value, 10);
    } else {
      result[key] = value;
    }
  }
  
  return result;
}
