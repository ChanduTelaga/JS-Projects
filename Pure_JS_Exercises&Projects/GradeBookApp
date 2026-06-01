function getAverage(array) {
  let sum = 0;
  for(let i = 0; i<array.length; i++) {
    sum += array[i];
  }

  return (sum)/(array.length);
}

function getGrade(score) {
  if(score === 100) {
    return "A+";
  }else if(score >=90 && score <=99) {
    return "A";
  }else if(score >=80 && score <=89) {
    return "B";
  }else if(score >=70 && score <=79) {
    return "C";
  }else if(score >=60 && score <=69) {
    return "D";
  }else if(score >=0 && score <=59) {
    return "F";
  }
}

function hasPassingGrade(score) {
  let grade = getGrade(score);
  if(grade === "F") {
    return false;
  }

  return true;
}

function studentMsg(array, score) {
  let average = getAverage(array);
  let grade = getGrade(score);
  if(grade === "F") {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
  }else {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
  }
}

