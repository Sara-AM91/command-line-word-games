//Takes two parameters: inputString (the phrase to encrypt) and shift (the number of positions to shift each letter).
function caesarCipherEncrypt(inputString, shift) {
  //Handle shifts greater than 26 or less than -26 by using modulo 26
  //Handles wrapping around the alphabet using modulo operations (% 26).
  shift = shift % 26;

  //Convert the inputString to lowercase for case insensitivity
  inputString = inputString.toLowerCase();

  let encryptedString = "";

  //Loop through each character in the input string
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];

    //If the character is a letter (a-z), it calculates its new position in the alphabet by adding shift to its ASCII code.
    if (char.match(/[a-z]/)) {
      let code = inputString.charCodeAt(i);

      //Shift the character by the specified number
      // Handle wrapping around the alphabet
      code = code + shift;

      // Adjust the code if it goes out of bounds of 'a' to 'z'
      if (code < 97) {
        code = code + 26;
      } else if (code > 122) {
        code = code - 26;
      }

      // Append the encrypted character to the encryptedString
      encryptedString += String.fromCharCode(code);
    } else {
      // If it's not a letter, just append it unchanged
      encryptedString += char;
    }
  }

  return encryptedString;
}

// Main program to read command line arguments and encrypt the input phrase
function main() {
  // Read arguments from command line
  let args = process.argv.slice(2);
  if (args.length !== 2) {
    console.error('Usage: node caesarCipher.js "phrase" shift');
    process.exit(1);
  }

  let inputString = args[0];
  let shift = parseInt(args[1], 10);

  // Encrypt the inputString with the specified shift
  let encryptedString = caesarCipherEncrypt(inputString, shift);

  // Output the encrypted string
  console.log(encryptedString);
}

// Run the main program
main();
