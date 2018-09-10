/**
 * Adds a submitted guess to the history
 * @param {array} record - Arrays of digits submitted
 * @param {array} history - Current history
 * @param {int} digitsGuessed - Quanitity of digits the player guessed
 * @param {int} placementsGuessed - Quanitity of placements the player guessed
 * @return {array} returns an array of objects. Each object has a record with the quantity of digits and placements the player guessed in that attempt.
 */
const addRecordToHistory = (record, digitsGuessed, placementsGuessed, history) => {
  // Index for react list key
  const index = history.length + 1;
  // Copy original to keep immutability
  history = history.slice();
  record = record.join('');
  history.push({ index, record, digitsGuessed, placementsGuessed });

  return history;
}

export default addRecordToHistory;