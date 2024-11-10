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

function getHumanChoice() {
    let humanChoice = prompt("Make your play!");
    console.log("You played " + humanChoice + ".");
    return humanChoice;
}

function playGame(numberRound) {

    let humanScore = 0;
    let computerScore = 0;

    function playRound (humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        console.log("It's a tie!");
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        humanScore++;
        console.log("You win! Rock beats Scissors!");
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock!");
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        humanScore++;
        console.log("You win! Scissors beat Paper!");
    } else if (computerChoice.toLowerCase() === "rock" && humanChoice.toLowerCase() === "scissors") {
        computerScore++;
        console.log("You lose! Rock beats Scissors!");
    } else if (computerChoice.toLowerCase() === "paper" && humanChoice.toLowerCase() === "rock") {
        computerScore++;
        console.log("You lose! Paper beats Rock!");
    } else if (computerChoice.toLowerCase() === "scissors" && humanChoice.toLowerCase() === "paper") {
        computerScore++;
        console.log("You lose! Scissors beat Paper!");
    } else {
        console.log("Invalid input! Please choose: Rock, Paper, or Scissors");
    }
    }

    for (let i = 0; i < numberRound; i++) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win! Score: " + humanScore + ":" + computerScore);
    } else if (computerScore < humanScore) {
        console.log("Sorry. You lose. Score: " + humanScore + ":" + computerScore);
    } else if (computerScore == humanScore) {
        console.log("It's a tie! Score: " + humanScore + ":" + computerScore);
    }
    
}

playGame(5);