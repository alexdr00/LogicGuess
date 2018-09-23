import React from 'react';
import defineTheme from '../../lib/defineTheme';
import formatTimeElapsed from '../../lib/formatTimeElapsed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Timer = (props) => {
  return (
    <div className={`timer ${defineTheme(props.level)}`}>
      <FontAwesomeIcon icon={['fas', 'clock']} className="timer__icon" />

      {formatTimeElapsed(props.timeElapsed)}
    </div>
  );
};

export default Timer;