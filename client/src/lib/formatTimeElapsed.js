import moment from 'moment';
require("moment-duration-format");

/**
 * Format seconds elapsed to time (hh:mm:ss).
 * @param {int} seconds - seconds elapsed
 */
const formatTimeElapsed = (seconds) => {
  const timeElapsed = moment.duration(seconds, 'seconds');
  const timeElapsedFormatted = timeElapsed.format('hh:mm:ss');
  return  timeElapsedFormatted;
}

export default formatTimeElapsed;