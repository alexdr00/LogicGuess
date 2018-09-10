import React from 'react';
import defineTheme from '../../lib/defineTheme';
import formatTimeElapsed from '../../lib/formatTimeElapsed';

const Timer = (props) => {
  return (
    <div className={`timer ${defineTheme(props.level)}`}>
      {formatTimeElapsed(props.timeElapsed)}
    </div>
  );
};

export default Timer;