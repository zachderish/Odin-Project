const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const div = document.querySelector("div");
div.style.marginTop = "20px";

let RECORD = [0,0,0];
let GAMES_COUNTER = 0;

rock.addEventListener('click', () => {
    let computerChoice = getComputerChoice();

    if (GAMES_COUNTER < 5) {
        div.textContent = playRound(computerChoice, "Rock", RECORD);
        GAMES_COUNTER++;
    }
    else {
        div.textContent = `${RECORD[0]} WINS | ${RECORD[1]} LOSSES | ${RECORD[2]} TIES`;
    }
});

paper.addEventListener('click', () => {
    let computerChoice = getComputerChoice();

    if (GAMES_COUNTER < 5) {
        div.textContent = playRound(computerChoice, "Paper", RECORD);
        GAMES_COUNTER++;
    }

    else {
        div.textContent = `${RECORD[0]} WINS | ${RECORD[1]} LOSSES | ${RECORD[2]} TIES`;
    }
});

scissors.addEventListener('click', () => {
    let computerChoice = getComputerChoice();

    if (GAMES_COUNTER < 5) {
        div.textContent = playRound(computerChoice, "Scissors", RECORD);
        GAMES_COUNTER++;
    }

    else {
        div.textContent = `${RECORD[0]} WINS | ${RECORD[1]} LOSSES | ${RECORD[2]} TIES`;
    }
});


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

function playRound(computerSelection, playerSelection, playerRecord) {
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.substring(0,1).toUpperCase() + playerSelection.substring(1);

    if (computerSelection === playerSelection){
        playerRecord[2]++;
        return `Tie! ${computerSelection} ties ${playerSelection}`;
    }

    let losingScenario1 = (computerSelection === "Rock" && playerSelection === "Scissors");
    let losingScenario2 = (computerSelection === "Paper" && playerSelection === "Rock");
    let losingScenario3 = (computerSelection === "Scissors" && playerSelection === "Paper");
    if (losingScenario1 ||  losingScenario2 || losingScenario3) {
        playerRecord[1]++;
        return `You lose! ${computerSelection} beats ${playerSelection}`; 
    }

    else {
        playerRecord[0]++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }

}

/* function game() {
    let rounds = 5;
    let playerRecord = [0, 0, 0];
    for(let i = 0; i < rounds; i++) {
        let playerSelection = prompt("Rock, paper or scissors? ");
        let computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerSelection, playerRecord));
    }

    if (playerRecord[0] > playerRecord[1]) {
        console.log("You win!");
    }
    if (playerRecord[0] < playerRecord[1]) {
        console.log("You lose!");
    }
    if (playerRecord[0] === playerRecord[1]) {
        console.log("You tie!");
    }

    console.log(`Final record: ${playerRecord[0]} wins, ${playerRecord[1]} losses, ${playerRecord[2]} ties`);

} */

//game();