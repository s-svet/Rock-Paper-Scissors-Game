function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNumber === 1) {
        computerChoice = "Rock";

    } else if (randomNumber === 2) {
        computerChoice = "Paper";

    } else {
        computerChoice = "Scissors";
    }
    console.log("I play " + computerChoice + "!");
    return computerChoice;
}