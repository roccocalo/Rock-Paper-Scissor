function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3);
    if (guess == 0) { return "rock"; }
    else if (guess == 1) { return "paper"; }
    else { return "scissor"; }
}

function singleRound() {

    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Enter your choice: rock, paper or scissor?").toLowerCase();

    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissor") {
        playerSelection = prompt("Invalid input, the choice is: rock, paper or scissor?").toLowerCase();
    }

    if (computerSelection == playerSelection) {
        return "It's a tie!";
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "paper" && playerSelection == "rock") ||
        (computerSelection == "scissors" && playerSelection == "paper")
    ) {
        return `You Lose, ${computerSelection} beats ${playerSelection}!`;
    } else {
        return `You Win, ${playerSelection} beats ${computerSelection}!`;
    }
}

function game() {
    let pointComputer = 0;
    let pointPlayer = 0;

    for (let i = 1; i < 6; i++) {
        let temp = singleRound();
        console.log(i + " turn : " + temp);
        if (temp.includes(("You Win"))) { pointPlayer++; }
        else if (temp.includes(("You Lose"))) { pointComputer++; }
        console.log("Player: " + pointPlayer + "; Computer: " + pointComputer);
    }

    if (pointComputer == pointPlayer) { console.log("Game End: It's a tie!") }
    else if (pointComputer <= pointPlayer) { console.log("Game End: You Win!") }
    else { console.log("Game End: You Lose!") }
}

game();
