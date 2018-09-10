/**
 * Checks if the user guessed all digits and placements (just in lottery level)
 *
 * @param {int} digitsGuessed - Quantity of digits the player guessed
 * @param {int} placementsGuessed - Quantity of placements the player guessed
 * @param {array} numberToGuess - Array of digits the player has to guess
 * @param {boolean} isLotteryLevel - Indicates if the player is playing on lottery level
 * @return {boolean} true if player won, false otherwise
 */
const checkPlayerHasWon = (digitsGuessed, placementsGuessed, numberToGuess, isLotteryLevel) => {
  if (isLotteryLevel) {
    if (digitsGuessed === numberToGuess.length &&
        placementsGuessed === numberToGuess.length) {

      return true;
    } else {
      return false;
    }
  }

  if (digitsGuessed === numberToGuess.length) {
    return true;
  }

  return false;
}

export default checkPlayerHasWon;