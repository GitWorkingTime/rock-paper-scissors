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
const scoreEl = document.querySelector(".score");
const resultEl = document.querySelector(".container .text");

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
    let resultStr = "";

    if( humanChoice == computerChoice ) {
        resultStr = "Tie!";
        resultEl.textContent = resultStr;
        return;
    }

    if( humanChoice == 0 && computerChoice == 1 ) {
        resultStr = "You lose! Paper beats rock";
        resultEl.innerText = resultStr;
        computerScore++;

    } else if ( humanChoice == 0 && computerChoice == 2) {
        resultStr = "You win! Rock beats scissors";
        resultEl.innerText = resultStr;
        userScore++;

    } else if ( humanChoice == 1 && computerChoice == 0 ) {
        resultStr = "You win! Paper beats rock";
        resultEl.innerText = resultStr;
        userScore++;

    } else if ( humanChoice == 1 && computerChoice == 2 ) {
        resultStr = "You lose! Scissors beats paper";
        resultEl.innerText = resultStr;
        computerScore++;

    } else if ( humanChoice == 2 && computerChoice == 0 ) {
        resultStr = "You lose! Rock beats scissors";
        resultEl.innerText = resultStr;
        computerScore++;

    } else if ( humanChoice == 2 && computerChoice == 1 ) {
        resultStr = "You win! Scissors beats paper";
        resultEl.innerText = resultStr;
        userScore++;
    }

    scoreEl.innerText = `User score: ${userScore}, Computer: ${computerScore}`;
}

let user = 0;
let computer = 0;

const btnContainer = document.querySelector(".buttons");
btnContainer.addEventListener("click", function(evt) {
    let target = evt.target;
    switch(target.className){
        case "computer":
            computer = getComputerChoice();
            break;
        case "user":
            user = getUserChoice();
            break;
        case "play":
            console.log(user);
            console.log(computer);
            playRound(user, computer);
            break;
    }
});
