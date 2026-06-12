function isPalindrome(word) {
  const wordArray = word.toLowerCase().split("");
  let reverseWord = ""
  for(let i = wordArray.length -1; i>=0; i--) {
    reverseWord += wordArray[i];
  }

  if(reverseWord == word.toLowerCase()) {
    return true;
  }else {
    return false;
  }
}

function findPalindromeBreaks(words) {
  const indices = [];
  for(let i = 0; i<words.length; i++) {
    if(!(isPalindrome(words[i]))){
      indices.push(i);
    }
  }

  return indices;
}

function findRepeatedPhrases(words, phraseLength) {
  if(phraseLength >= words.length) {
    return [];
  }
  const s_a = []
  for (let i = 0; i <= words.length - phraseLength; i++) {
    let string = words.slice(i, i+phraseLength).join(" ");
    s_a.push(string);
  }
  console.log(s_a);
  const indices = [];
  for(let i = 0; i<s_a.length; i++) {
    let string = s_a[i];
    let k = i+1;
    while(k < s_a.length) {
      if(string === s_a[k]) {
        if(!indices.includes(i)) {
          indices.push(i);
        }
        if(!indices.includes(k)) {
          indices.push(k);
        }
      }
      k++;
    }
  }

  return indices;
}

function analyzeTexts(texts, phraseLength) {
  if(texts.length === 0) {
    return [];
  }

  const array_Objs = [];
  for(let i = 0; i<texts.length; i++) {
    const repeatedPhrases = findRepeatedPhrases(texts[i], phraseLength);
    const palindromeBreaks = findPalindromeBreaks(texts[i]);
    array_Objs.push(
      {
        repeatedPhrases: repeatedPhrases,
        palindromeBreaks: palindromeBreaks
      }
    )
  }

  return array_Objs;
}

