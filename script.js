let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');

let textResult = document.querySelector('.text-result');

let btnRock = document.getElementById("#rock");
let btnPaper = document.getElementById("#paper");
let btnScissor = document.getElementById("#scissor");


function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3);
    if (guess == 0) { return "rock"; }
    else if (guess == 1) { return "paper"; }
    else { return "scissor"; }
}

function singleRound(playerSelection) {

    let computerSelection = getComputerChoice();

    if (computerSelection == playerSelection) {
        textResult.textContent = "It's a tie!";
        return "It's a tie!";
    } else if (
        (computerSelection == "rock" && playerSelection == "scissor") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissor" && playerSelection == "paper")
    ) {
        textResult.textContent = "You Lose, " + computerSelection + " beats " + playerSelection + "!";
        return `You Lose, ${computerSelection} beats ${playerSelection}!`;
    } else {
        textResult.textContent = "You Win, " + playerSelection + " beats " + computerSelection + "!";
        return `You Win, ${playerSelection} beats ${computerSelection}!`;
    }
}


let pointComputer = 0;
let pointPlayer = 0;

btnRock.addEventListener('click', () => {
    let temp = singleRound("rock");
    game(temp);
});

btnPaper.addEventListener('click', () => {
    let temp = singleRound("paper");
    game(temp);
});

btnScissor.addEventListener('click', () => {
    let temp = singleRound("scissor");
    game(temp);
});

function game(temp) {

    if (temp.includes(("You Win"))) {
        pointPlayer++;
        playerScore.textContent = "Player Score:" + pointPlayer;
    }
    else if (temp.includes(("You Lose"))) {
        pointComputer++;
        computerScore.textContent = "Computer Score:" + pointComputer;
    }

    if (pointPlayer == 5 ) {
        textResult.textContent = "Player Wins!";
        alert("Player Wins!")
        pointComputer = 0;
        pointPlayer = 0;
        playerScore.textContent = "Player Score:" + pointPlayer;
        computerScore.textContent = "Computer Score:" + pointComputer;
    } 
    else if (pointComputer == 5) {
        textResult.textContent = "Computer Wins!";
        alert("Computer Wins!")
        pointComputer = 0;
        pointPlayer = 0;
        playerScore.textContent = "Player Score:" + pointPlayer;
        computerScore.textContent = "Computer Score:" + pointComputer;
    }
}


