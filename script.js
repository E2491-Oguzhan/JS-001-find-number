// * Game variables
var randomNumber = Math.floor(Math.random() * 100);
var userGuess = 0;
var guessesRemaining = 10;
var guessesMade = 0;
var gameState = "";
var gameWon = false;

// * The input and output fields
var input = document.querySelector("#input");
var output = document.querySelector("#output");
input.style.padding = "10px";

// * The button field
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.style.padding = "10px";
button.addEventListener("click", clickHandler, false);

window.addEventListener("keydown", keydownHandler, false);

// * Function Definitions
function keydownHandler(event) {
  if (event.keyCode === 13) {
    validateInput();
  }
}

function clickHandler() {
  validateInput();
}

function playGame() {
  guessesRemaining--;
  guessesMade++;
  gameState = " Guess: " + guessesMade + ", Remaining: " + guessesRemaining;
  userGuess = parseInt(input.value);

  if (userGuess > randomNumber) {
    output.innerHTML = "That's high." + gameState;
    if (guessesRemaining < 1) {
      endGame();
    }
  } else if (userGuess < randomNumber) {
    output.innerHTML = "That's low." + gameState;
    if (guessesRemaining < 1) {
      endGame();
    }
  } else {
    gameWon = true;
    endGame();
  }
}

function endGame() {
  if (gameWon) {
    output.innerHTML =
      "Yes, it's " +
      randomNumber +
      "!" +
      "<br>" +
      "It only took you " +
      guessesMade +
      " guesses.";
  } else {
    output.innerHTML =
      "No more guesses left!<br> " + "The number was: " + randomNumber;
  }
}

function validateInput() {
  userGuess = parseInt(input.value);
  if (isNaN(userGuess)) {
    output.innerHTML = "Please enter a number not text.";
  } else {
    playGame();
  }
}
