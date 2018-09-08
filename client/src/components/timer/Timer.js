import React from 'react';
import defineTheme from '../../utils/defineTheme';
import formatTimeElapsed from '../../utils/formatTimeElapsed';

const Timer = (props) => {
  return (
    <div className={`timer ${defineTheme(props.level)}`}>
      {formatTimeElapsed(props.timeElapsed)}
    </div>
  );
};

export default Timer;