function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(' ');
  let count = 0;

  for (const word of words) {
    if (word !== '') {
      count++;
    }
  }

  return count;
}

const wordCount  = getWordCount("I love freeCodeCamp");
console.log(`Word  Count: ${wordCount}`);


function sentenceAnalyzer(sentence) {
  console.log("\n\n");
  console.log("Vowel Count: "+getVowelCount(sentence))
  console.log("Consonant Count: "+getConsonantCount(sentence))
  console.log("Punctuation Count: "+getPunctuationCount(sentence))
  console.log("word Count: "+getWordCount(sentence))

  return "Thanks for using sentence Analyzer"
}

console.log(sentenceAnalyzer("I love freeCodeCamp"));
