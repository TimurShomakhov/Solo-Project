function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = {
        rock: '✊',
        paper: '🤚',
        scissors: '✌️'
    };
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    const resultElement = document.getElementById('result');
    resultElement.classList.remove('visible'); // Reset visibility
    resultElement.style.opacity = '1'; // Ensure it is visible immediately

    // Countdown logic
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        resultElement.textContent = countdown; // Display the countdown number
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);

            // Determine the result after the countdown
            let result = '';
            if (playerChoice === computerChoice) {
                result = `It's a tie! You both chose ${emojis[playerChoice]}.`;
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = `You win! ${emojis[playerChoice]} beats ${emojis[computerChoice]}.`;
            } else {
                result = `You lose! ${emojis[computerChoice]} beats ${emojis[playerChoice]}.`;
            }

            resultElement.textContent = result;
            resultElement.classList.add('visible'); // Trigger fade-in animation
        }
    }, 1000); // Update every second
}
