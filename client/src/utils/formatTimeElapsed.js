import moment from 'moment';
require("moment-duration-format");

const formatTimeElapsed = (seconds) => {
  const timeElapsed = moment.duration(seconds, 'seconds');
  const timeElapsedFormatted = timeElapsed.format('hh:mm:ss');
  return  timeElapsedFormatted;
}

export default formatTimeElapsed;