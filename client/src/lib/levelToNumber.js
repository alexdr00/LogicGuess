/**
 * Represents a level with a number.
 * The higher the number, the tougher the level.
 * @param {String} level
 * @return {Int} - number representing certain level.
 */
const levelToNumber = (level) => {
  switch (level) {
    case 'easy':
      return 1;
    case 'moderate':
      return 2;
    case 'hard':
      return 3;
    case 'lottery':
      return 4;
  }
}

export default levelToNumber;