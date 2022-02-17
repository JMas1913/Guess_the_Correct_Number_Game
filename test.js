if (guessCount === 1) {
  guesses.textContent = 'The previous guesses was: ';
}

guesses.textContent += userGuess + ' ';

if (userGuess === randomNumber) {
  lastResult.textContent = 'Congratulations! You got it right!';
  lastResult.style.backgroundColor = 'green';
  lowOrHi.textContent = '';
  setGameOver();
} else if (guessCount === 10) {
  lastResult.textContent = 'GAME OVER!!!';
  lowOrHi.textContent = '';
  setGameOver();
} else {
  lastResult.textContent = 'Wrong!';
  lastResult.style.backgroundColor = 'red';
  if (userGuess < randomNumber) {
    lowOrHi.textContent = 'Last guess was too low!';
  } else if (userGuess > randomNumber) {
    lowOrHi.textContent = 'Last guess was too high!';
  }
}

guessCount++;
guessField.value = '';

///////////////////////////////////////////////////

if (guessCount === 1) {
  guesses.textContent = 'The previous guess was: ';
}

guesses.textContent += userGuess + '';

switch (gamePlay) {
  case 'userGess === randomNumber':
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
    break;
  case 'guessCount === 10':
    lastResult.textContent = 'GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
    break;
  case 'lowOrHigh':
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
    break;
}
