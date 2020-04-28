const config = {
    prizeMultiplier: 3,
    prizeDivider: 2,
    rangeChanger: 5,
    totalAttempts: 3
};
const gameSettings = {
    prize: 100,
    maxRangeValue: 5,
    totalPrize: 0
};

let playAgain = false;

if (confirm('Do you want to play a game?')) {
    do {
        playAgain = false;
        let tmpMaxRangeValue = gameSettings.maxRangeValue;
        const randomNumber = Math.floor(Math.random() * ++tmpMaxRangeValue);
        for (
            let currentAttempt = 1, currentPrize = gameSettings.prize;
            currentAttempt <= config.totalAttempts;
            currentAttempt++, currentPrize = Math.floor(currentPrize / config.prizeDivider)
        ) {
            const userGuess = parseInt(prompt(`
        Enter a number from 0 to ${gameSettings.maxRangeValue}
        Attempts left: ${config.totalAttempts - currentAttempt + 1}
        Total prize: ${gameSettings.totalPrize}$
        Possible prize on current attempt: ${currentPrize}$`
            ));
            if (!isNaN(userGuess) && userGuess === randomNumber) {
                gameSettings.totalPrize += currentPrize;
                if (confirm(
                    `Congratulation, you won! Your prize is: ${gameSettings.totalPrize}$ 
        Do you want to continue?`)
                ) {
                    gameSettings.prize *= config.prizeMultiplier;
                    gameSettings.maxRangeValue += config.rangeChanger;
                    playAgain = true;
                    break;
                }
            } else if (isNaN(userGuess)) {
                alert('You did not become a millionaire, but can.');
                break;
            } else if (currentAttempt === config.totalAttempts) {
                alert(`Thank you for your participation. Your prize is: ${gameSettings.totalPrize}$`);
                playAgain = confirm('Do you want to play again?');
            }
        }
    } while (playAgain);
} else {
    alert('You did not become a millionaire, but can.');
}