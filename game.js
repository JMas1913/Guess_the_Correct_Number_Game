const guesses = document.querySelector('.guesses');
const lastChance = document.querySelector('.lastChance');
const lowOrHi = document.querySelector('.lowOrHi'); //determins if the guessed number is lower or higher than the number chosen by the computer
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1; //starting count number
let randomNumber = Math.floor(Math.random() * 100) + 1; //randomized whole integer between 1 and 100

function checkGuess() {
  const userGuess = Number(guessField.value); //takes the input value
  if (guessCount === 1) {
    guesses.textContent = 'The previous guess was: ';
  }

  guesses.textContent += userGuess + ' '; // displays all the guesses

  if (userGuess === randomNumber) {
    //user guesses correctly
    lastChance.textContent =
      'Congratulations! You guessed correctly in ' + guessCount + ' guesses!';
    lastChance.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    //reached the max amount of guesses and immediately ends the game
    lastChance.textContent = 'NO MORE CHANCES!! You used up all your guesses';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    //logic for the game
    lastChance.textContent =
      'Wrong! You have ' + (10 - guessCount) + ' guesses left';
    lastChance.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++; //keeps track of amount of guesses
  guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  lastChance.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
