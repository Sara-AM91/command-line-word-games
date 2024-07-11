function caesarCipherEncrypt(inputString, shift) {
  if (shift > 26) {
    console.error("The shift value must be between -26 and 26.");
  }
  inputString = inputString.toLowerCase();
  let encryptedString = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (char.match(/[a-z]/)) {
      let asciiCodeNo = inputString.charCodeAt(i);
      //It returns a number between 0 and 65535.
      asciiCodeNo = asciiCodeNo + shift;

      if (asciiCodeNo < 97) {
        //A=65 a=97
        asciiCodeNo = asciiCodeNo + 26;
      } else if (asciiCodeNo > 122) {
        //Z=90 z=122
        asciiCodeNo = asciiCodeNo - 26;
      }

      encryptedString += String.fromCharCode(asciiCodeNo);
    } else {
      //If it's not a letter, just append it unchanged
      encryptedString += char;
    }
  }

  return encryptedString;
}

function main() {
  let inputString = process.argv[2];
  let shift = process.argv[3];
  shift = parseInt(shift, 10);
  //If either argument is missing
  if (!inputString || !shift) {
    console.error(
      "The program takes two parameters: 1-The phrase to encrypt and 2-The number of positions to shift each letter."
    );
    process.exit(1);
  }

  let encryptedString = caesarCipherEncrypt(inputString, shift);
  console.log(encryptedString);
}

main();
