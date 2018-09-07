import React from 'react';

const StatisticsPanel = (props) => {
  return (
    <div className="victory-message-box__statistics">
      <div className="victory-message-box__title">{props.label}</div>
      <div className="victory-message-box__value">{props.value}</div>
    </div>
  );
};

export default StatisticsPanel;