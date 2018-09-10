/**
 * Gets the quantity of digits the user has to guess
 * based on the level chosen
 * @param {string} levelChosen - level chosen by user
 * @return {int} quantity of digits the user has to guess in order to win
 */
const getDigitsQuantity = (levelChosen) => {
  let digitsQuantity = null;

  switch (levelChosen) {
    case 'easy':
  digitsQuantity = 4;
      break;
    case 'moderate':
  digitsQuantity = 5;
      break;
    case 'hard':
  digitsQuantity = 6;
      break;
    default:
  digitsQuantity = 5;
  }

  return digitsQuantity;
}

export default getDigitsQuantity;