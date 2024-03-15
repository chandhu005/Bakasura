import React, { useState } from 'react';

const GuessingGame = () => {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [result, setResult] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuess = () => {
    const guessedNumber = parseInt(guess, 10);

    if (isNaN(guessedNumber)) {
      setResult('Please enter a valid number.');
    } else if (guessedNumber === randomNumber) {
      setResult('Congratulations! You guessed the correct number!');
      setRandomNumber(generateRandomNumber());
    } else {
      setResult('Oops! Try again.');
    }
  };

  return (
    <div>
      <h1>Guessing Game</h1>
      <p>Guess a number between 1 and 10:</p>
      <input type="text" value={guess} onChange={handleInputChange} />
      <button onClick={handleGuess}>Submit Guess</button>
      <p>{result}</p>
    </div>
  );
};

export default GuessingGame;
