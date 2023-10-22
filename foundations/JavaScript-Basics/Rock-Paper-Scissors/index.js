function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    
    switch(computerChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        default:
            return "Scissors";
    }

}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1);

    if (computerSelection === playerSelection){
        return `Tie! ${computerSelection} ties ${playerSelection}`;
    }

    let losingScenario1 = (computerSelection === "Rock" && playerSelection === "Scissors");
    let losingScenario2 = (computerSelection === "Paper" && playerSelection === "Rock");
    let losingScenario3 = (computerSelection === "Scissors" && playerSelection === "Paper");
    if (losingScenario1 ||  losingScenario2 || losingScenario3) {
        return `You lose! ${computerSelection} beats ${playerSelection}`; 
    }

    else {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }

}

let playerSelection = "rock";
let computerSelection = getComputerChoice();
console.log(playRound(computerSelection, playerSelection))