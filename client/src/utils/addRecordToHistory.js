/**
 * Adds a submitted guess to the history
 * @param {array} record - Arrays of digits submitted
 * @param {array} history - Current history
 * @param {int} digitsGuessed - Quanitity of digits the player guessed
 * @return {array} returns an array of objects, each object is a record with the quantity of digits the user guessed that attempt.
 */
const addRecordToHistory = (record, digitsGuessed, placementsGuessed, history) => {
  history = history.slice();
  record = record.join('');
  history.push({ record, digitsGuessed, placementsGuessed });

  return history;
}

export default addRecordToHistory;