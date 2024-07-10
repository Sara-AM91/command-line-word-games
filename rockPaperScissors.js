function generateRandomMove_FN() {
  const validMoves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * validMoves.length);
  // console.log(`random index is: ${randomIndex}`);
  return validMoves[randomIndex];
}

function determineWinner_FN(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return "It's a tie!";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

const playerMove = process.argv[2];

switch (playerMove.toLowerCase()) {
  case "rock":
  case "paper":
  case "scissors":
    const playerMoveLowerCase = playerMove.toLowerCase();
    const computerMove = generateRandomMove_FN();
    const result = determineWinner_FN(playerMoveLowerCase, computerMove);
    console.log(`You chose: ${playerMoveLowerCase}`);
    console.log(`Computer chose: ${computerMove}`);
    console.log(result);
    break;
  default:
    console.log("Please provide a valid move: rock, paper, or scissors.");
}
