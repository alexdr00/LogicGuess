/**
 * Makes a count of number of digits and number of placemented guessed
 *
 * @param {array} numberBeingGuessed - Array of digits the user typed
 * @param {array} numberToGuess - Array of digits the user has to guess
 * @return {object} returns an object containing the number of digits and placements the    user guessed
 */
const countGuessed = (numberBeingGuessed, numberToGuess) => {
  let digitsGuessed = 0;
  let placementsGuessed = 0;

  numberToGuess.forEach(digitToGuess => {
    numberBeingGuessed.forEach(digitTyped => {
      const indexDigitToGuess = numberToGuess.indexOf(digitToGuess);
      const indexDigitTyped = numberBeingGuessed.indexOf(digitTyped);

      if (digitToGuess === digitTyped) {
        digitsGuessed += 1;

        if (indexDigitToGuess === indexDigitTyped) {
          placementsGuessed += 1;
        }
      }
    })
  });

  return { digitsGuessed, placementsGuessed };
}

export default countGuessed;