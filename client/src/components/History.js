import React from 'react';

import defineTheme from '../utils/defineTheme';

const History = (props) => {
  const historyStatus = props.history != false ? 'shown' : '';

  const renderHistory = (history) => {
    return history.map(record => <li key={history.indexOf(record)} className="history__item">{record}</li>)
  }

  return (
    <div className={`history history--${historyStatus} ${defineTheme(props.level)}`}>
      <ul>
        {renderHistory(props.history)}
      </ul>
    </div>
  );
};

export default History;