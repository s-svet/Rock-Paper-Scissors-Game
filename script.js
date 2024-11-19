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
    return computerChoice;
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === computerChoice.toLowerCase()) {
        document.querySelector("#roundScore").textContent = "It's a tie!";
        document.querySelector("#runningScore").textContent = "Score: " + humanScore + ":" + computerScore;
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissors") {
        humanScore++;
        document.querySelector("#roundScore").textContent = "You win! Rock beats Scissors!";
        document.querySelector("#runningScore").textContent = "Score: " + humanScore + ":" + computerScore;
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock") {
        humanScore++;
        document.querySelector("#roundScore").textContent = "You win! Paper beats Rock!";
        document.querySelector("#runningScore").textContent = "Score: " + humanScore + ":" + computerScore;
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice.toLowerCase() === "paper") {
        humanScore++;
        document.querySelector("#roundScore").textContent = "You win! Scissors beat Paper!";
        document.querySelector("#runningScore").textContent = "Score: " + humanScore + ":" + computerScore;
    } else if (computerChoice.toLowerCase() === "rock" && humanChoice.toLowerCase() === "scissors") {
        computerScore++;
        document.querySelector("#roundScore").textContent = "You lose! Rock beats Scissors!";
        document.querySelector("#runningScore").textContent = "Score: " + humanScore + ":" + computerScore;
    } else if (computerChoice.toLowerCase() === "paper" && humanChoice.toLowerCase() === "rock") {
        computerScore++;
        document.querySelector("#roundScore").textContent = "You lose! Paper beats Rock!";
        document.querySelector("#runningScore").textContent = "Score: " + humanScore + ":" + computerScore;
    } else if (computerChoice.toLowerCase() === "scissors" && humanChoice.toLowerCase() === "paper") {
        computerScore++;
        document.querySelector("#roundScore").textContent = "You lose! Scissors beat Paper!";
        document.querySelector("#runningScore").textContent = "Score: " + humanScore + ":" + computerScore;
    } 
    }

    function checkScore() {
        if (humanScore == 5) {
            document.querySelector("#finalScore").textContent = "You win the game! Score: " + humanScore + ":" + computerScore;
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore == 5) {
            document.querySelector("#finalScore").textContent = "Sorry. You lose the game. Score: " + humanScore + ":" + computerScore;
            humanScore = 0;
            computerScore = 0;
        }
    }
   
    let humanScore = 0;
    let computerScore = 0;
    
    let rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
    let playerSelection = "Rock";
    document.querySelector("#playerSelection").textContent = "You played Rock!";
    let computerSelection = getComputerChoice();
    document.querySelector("#computerSelection").textContent = "I play " + computerSelection + "!";
    return playRound(playerSelection, computerSelection), checkScore();
    });
    checkScore();

    let paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
    let playerSelection = "Paper";
    document.querySelector("#playerSelection").textContent = "You played Paper!";
    let computerSelection = getComputerChoice();
    document.querySelector("#computerSelection").textContent = "I play " + computerSelection + "!";
    return playRound(playerSelection, computerSelection), checkScore();
    });
    checkScore(); 

    let scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
    let playerSelection = "Scissors";
    document.querySelector("#playerSelection").textContent = "You played Scissors!";
    let computerSelection = getComputerChoice();
    document.querySelector("#computerSelection").textContent = "I play " + computerSelection + "!";
    return playRound(playerSelection, computerSelection), checkScore();
    });

   
