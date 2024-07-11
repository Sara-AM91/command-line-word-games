//Get the user input from command line argument
const userInput = process.argv[2];

function englishToPigLatin(word) {
  const startsWithConsonantVowel = /^([^aeiouy]+)([aeiouy].*)/i;
  const startsWithTwoConsonants = /^([^aeiouy]{2})(.*)/i;
  const startsWithVowel = /^[aeiouy].*/i;

  if (startsWithConsonantVowel.test(word)) {
    const match = word.match(startsWithConsonantVowel);

    const consonantPart = match[1];
    const restOfWord = match[2];

    return restOfWord + consonantPart.toLowerCase() + "ay";
  } else if (startsWithTwoConsonants.test(word)) {
    const match = word.match(startsWithTwoConsonants);
    const consonantPart = match[1];
    const restOfWord = match[2];
    return restOfWord + consonantPart.toLowerCase() + "ay";
  } else if (startsWithVowel.test(word)) {
    return word + "way";
  } else {
    return word;
  }
}

const translatedWord = englishToPigLatin(userInput);

console.log(translatedWord);
