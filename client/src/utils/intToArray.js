/**
 * Converts an integer into an array
 *
 * @param {int} int Integer to convert into array
 * @return {array} returns an array of integers
 */
const intToArray = (int) => {
  let intArr = int.toString().split('');
  intArr = intArr.map(intStr => parseInt(intStr, 0));

  return intArr;
}

export default intToArray;