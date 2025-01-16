function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Counting down...';
    resultElement.classList.remove('visible'); // Reset visibility

    // Create a countdown timer
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        resultElement.textContent = `Result in ${countdown}...`;
        countdown--;
        if (countdown < 0) {
            clearInterval(countdownInterval);

            // Determine the result after the countdown
            let result = '';

            if (playerChoice === computerChoice) {
                result = `It's a tie! You both chose ${playerChoice}.`;
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = `You win! ${playerChoice} beats ${computerChoice}.`;
            } else {
                result = `You lose! ${computerChoice} beats ${playerChoice}.`;
            }

            resultElement.textContent = result;
            resultElement.classList.add('visible'); // Trigger visibility
        }
    }, 1000); // Update every second
}
