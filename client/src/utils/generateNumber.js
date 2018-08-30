import * as validate from './inputValidations';
import intToArray from './intToArray';

/**
 * Generates a number the user has to guess.
 * the quantity of digits to guess is based on the level chosen.
 *
 * Generates another number if the previous one had duplicate digits
 *
 * @param {int} digitsQuantity - how many digits should be generated
 * @return {array} array of digits the user has to guess.
 */
const generateNumberToGuess = (digitsQuantity) => {
  let rangeMax = ['1'];
  let rangeMin = null;

  for (let i = 0; i < digitsQuantity; i++) {
    rangeMax.push('0');
  }

  rangeMin = parseInt(rangeMax.slice(0, -1).join(''), 0);
  rangeMax = parseInt(rangeMax.join(''), 0);

  let numberToGuess = Math
    .floor(Math.random() * (rangeMax - rangeMin)) + rangeMin;

  if (validate.hasDuplicateDigits(numberToGuess)) {
    return generateNumberToGuess(digitsQuantity);
  }

  // convert to array
  numberToGuess = intToArray(numberToGuess);

  return numberToGuess;
}

export default generateNumberToGuess;