function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = {
        rock: '✊',
        paper: '🤚',
        scissors: '✌️',
    };
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Load audio elements
    const buttonSound = document.getElementById('button-sound');
    const countdownSound = document.getElementById('countdown-sound');
    const winSound = document.getElementById('win-sound');
    const loseSound = document.getElementById('lose-sound');
    const tieSound = document.getElementById('tie-sound');

    const resultElement = document.getElementById('result');
    resultElement.classList.remove('visible'); // Reset visibility
    resultElement.style.opacity = '1'; // Ensure it is visible immediately

    // Play button click sound
    buttonSound.play();

    // Countdown logic
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        resultElement.textContent = countdown; // Display the countdown number
        countdownSound.play(); // Play countdown sound
        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);

            // Determine the result after the countdown
            let result = '';
            if (playerChoice === computerChoice) {
                result = `It's a tie! You both chose ${emojis[playerChoice]}.`;
                tieSound.play(); // Play tie sound
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = `You win! ${emojis[playerChoice]} beats ${emojis[computerChoice]}.`;
                winSound.play(); // Play win sound
            } else {
                result = `You lose! ${emojis[computerChoice]} beats ${emojis[playerChoice]}.`;
                loseSound.play(); // Play lose sound
            }

            resultElement.textContent = result;
            resultElement.classList.add('visible'); // Trigger fade-in animation
        }
    }, 1000); // Update every second
}
