/*
 * Rock Paper Scissors
 * 1.) Player chooses:
 *  - rock
 *  - paper
 *  - scissors
 * 2.) Computer chooses rock, paper, or scissors
 * 3.) Display winner
 * 
 * Functions:
 *  - Ask user input
 *  - Generate computer decision
 *  - Decide
 * 
 * Variables:
 *  - User choice
 *  - Computer choice
 * 
 * Choices:
 *  - rock = 0
 *  - paper = 1
 *  - scissors = 2
 */
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.random();
    let computer = 0;

    if( choice < 0.33) {
        computer = 0;
    } else if ( choice >= 0.33 && choice < 0.66 ) {
        computer = 1;
    } else if (choice >= 0.66 ) {
        computer = 2;
    }
    return computer;
}

function getUserChoice() {
    let choice = prompt("Choose from rock, paper, or scissors: ");
    choice = choice.toLowerCase();
    choice = choice.trim();
    choice = choice.replaceAll(" ", "");

    let user = 0;

    switch(choice){
        case "rock":
            user = 0;
            break;
        case "paper":
            user = 1;
            break;
        case "scissors":
            user = 2;
            break;
    }
    return user;
}

function playRound( humanChoice, computerChoice ) {
    if( humanChoice == computerChoice ) {
        console.log("Tie!");
        return;
    }

    if( humanChoice == 0 && computerChoice == 1 ) {
        console.log("You lose! Paper beats rock");
        computerScore++;

    } else if ( humanChoice == 0 && computerChoice == 2) {
        console.log("You win! Rock beats scissors");
        userScore++;

    } else if ( humanChoice == 1 && computerChoice == 0 ) {
        console.log("You win! Paper beats rock");
        userScore++;

    } else if ( humanChoice == 1 && computerChoice == 2 ) {
        console.log("You lose! Scissors beats paper");
        computerScore++;

    } else if ( humanChoice == 2 && computerChoice == 0 ) {
        console.log("You lose! Rock beats scissors");
        computerScore++;

    } else if ( humanChoice == 2 && computerChoice == 1 ) {
        console.log("You win! Scissors beats paper");
        userScore++;
    }
}

function playGame() {
    for( let i = 0; i < 5; ++i ) {
        playRound( getUserChoice(), getComputerChoice() );
    }

    if( userScore == computerScore ) {
        console.log("TIE");
    } else if ( userScore > computerScore ) {
        console.log("You won!");
    } else if ( userScore < computerScore ) {
        console.log("You lost!");
    }
}

playGame();