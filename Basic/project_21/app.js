// Guess the number
const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessNumberInput');
const preGuess = document.querySelector('.preGuess');
const guessSlot = document.querySelector('.remaningGuess');
const massage = document.querySelector('.message');

const randomNumber = parseInt(Math.random() * 100 + 1);

const prevGuessArray = [];
let remainingAttempts = 10;

let playGame = true;

if (playGame) {
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        const userGuess = parseInt(userInput.value);
        console.log(userGuess);
        validateGuess(userGuess);
    });
}

function validateGuess(guess) {
    // for checking the guess value validation
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1) {
        alert("Your guess must be greater than zero");
    } else if (guess > 100) {
        alert("Your guess must not exceed 100");
    } else {
        prevGuessArray.push(guess);
        if (remainingAttempts == 0) {
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    // checking the value == randomNumber or not   
    if (guess == randomNumber) {
        displayMessage("You guessed it Right!")
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Too low, try again`);
    } else if (guess > randomNumber) {
        displayMessage(`Too high, try again`);
    }
}

function displayGuess(guess) {
    // for displaying the guess values and guess remaning
    userInput.value = '';
    preGuess.innerHTML += `${guess} `
    remainingAttempts--;
    guessSlot.innerHTML = `${remainingAttempts}`;
}

function displayMessage(message) {
    // for displaying any message
    message.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
    // resetting all variables to initial state
    

}

function endGame() {
    // ending game with a message
    
}
