/**
 * Checks if the user has typed the quantity digits the level requires
 *
 * @param {int} digitsQuantity - quantity of digits the user has to guess
 * @param {array} numberBeingGuessed - array of digits the user has typed
 * @return {boolean} true if user has typed all required digits, false otherwise.
 */
const hasRequiredDigits = (digitsQuantity, numberBeingGuessed) => {
  if (numberBeingGuessed.length === digitsQuantity) {
    return true;
  }

  return false;
}

/**
 * Checks if certain number has duplicate digits
 *
 * @param {int|array} numberArr - number to check
 * @return {boolean} true if the number has duplicate digits, false otherwise.
 */
const hasDuplicateDigits = (numberArr) => {
  // If numerArr is int, convert to array
  if (Number.isInteger(numberArr)) {
    numberArr = numberArr.toString().split('');
  }

  const withNoDuplicates = new Set(numberArr);

  if (numberArr.length === withNoDuplicates.size) {
    return false;
  }

  return true;
}

export { hasDuplicateDigits, hasRequiredDigits };