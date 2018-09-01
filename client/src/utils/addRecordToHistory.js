/**
 * Adds a submitted guess to the history
 * @param {array} record - Arrays of digits submitted
 * @param {array} history - Current history
 * @return {array} history updated with new record
 */
const addRecordToHistory = (record, history) => {
  history = history.slice();
  record = record.join('');
  history.push(record);

  return history;
}

export default addRecordToHistory;