//Get the user input from command line argument
const userInput = process.argv[2];

function englishToPigLatin(word) {
  //Regular expressions to match different patterns
  const startsWithConsonantVowel = /^([^aeiouy]+)([aeiouy].*)/i;
  const startsWithTwoConsonants = /^([^aeiouy]{2})(.*)/i;
  const startsWithVowel = /^[aeiouy].*/i;

  //In JavaScript, every regular expression object has a .test() method.
  //.test(word) checks whether the regular expression matches the provided string word.
  //It returns true if there is a match, otherwise false.

  if (startsWithConsonantVowel.test(word)) {
    //Case: Starts with a consonant and a vowel
    //The match() method returns an array with the matches.
    const match = word.match(startsWithConsonantVowel);
    //match[0] is the entire matched string
    const consonantPart = match[1]; //match[1] contains the substring that matches the first capturing group ([^aeiouy]+), which is the sequence of consonants at the beginning of the word.
    const restOfWord = match[2]; //match[2] contains the substring that matches the second capturing group ([aeiouy].*), which is the vowel followed by the rest of the word

    //Here we don't have match[3] (/i) because /i flag specifically stands for "case insensitive", meaning that the pattern will match both uppercase and lowercase letters
    return restOfWord + consonantPart.toLowerCase() + "ay";
  } else if (startsWithTwoConsonants.test(word)) {
    //Case: Starts with two consonants
    const match = word.match(startsWithTwoConsonants);
    const consonantPart = match[1];
    const restOfWord = match[2];
    return restOfWord + consonantPart.toLowerCase() + "ay";
  } else if (startsWithVowel.test(word)) {
    //Case: Starts with a vowel
    return word + "way";
  } else {
    //Default case: should not happen if input is valid English
    return word; //return as is
  }
}

const translatedWord = englishToPigLatin(userInput);
console.log(translatedWord);
