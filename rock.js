let userScore = 0;
let computerScore = 0;

function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById('user-choice').innerText = `You chose: ${userChoice}`;
    document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;
    
    const result = getResult(userChoice, computerChoice);
    document.getElementById('result').innerText = result;

    if (result === "You win!") {
        userScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }

    updateScore();
}

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a draw!";
    }
    if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function updateScore() {
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
}
