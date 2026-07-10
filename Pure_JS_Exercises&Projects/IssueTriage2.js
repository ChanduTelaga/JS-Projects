function triageIssue(title, labels) {
  function removeLabel (labels, label) {
    const index = labels.indexOf(label);
    if(index !== -1) {
      labels.splice(index, 1);
    }
  }
 
  if(labels.length === 0) {
    if(title.includes("error") || title.includes("bug")) {
      labels.push("bug");
      labels.push("needs triage");
      if(title.includes("security")) {
        labels.push("critical");
      }
      return labels;
    }else if(title.includes("feature") || title.includes("add")) {
      labels.push("enhancement");
      labels.push("discussing");
      if(title.includes("security")) {
        labels.push("critical");
      }
      return labels;
    }
  }
 
  if(labels.includes("needs triage") && (title.includes("simple") || title.includes("easy"))) {
    removeLabel (labels, "needs triage");
    labels.push("good first issue");
 
    if(title.includes("security")) {
      labels.push("critical");
    }
    return labels;
  }
 
  if(labels.includes("discussing") && (title.includes("planned") || title.includes("next"))) {
    removeLabel (labels, "discussing");
    labels.push("on the roadmap");
    if(title.includes("security")) {
      labels.push("critical");
    }
    return labels;
  }else if(labels.includes("needs triage") || labels.includes("discussing")) {
    removeLabel (labels, "needs triage");
    removeLabel (labels, "discussing");
    labels.push("help wanted");
    if(title.includes("security")) {
      labels.push("critical");
    }
    return labels;
  }
 
  if(title.includes("security")) {
    labels.push("critical");
    return labels;
  }
}
 
console.log(triageIssue("app crashes with error", []));