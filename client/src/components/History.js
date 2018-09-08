import React from 'react';

import defineTheme from '../utils/defineTheme';

const History = (props) => {
  const historyStatus = props.history != false ? 'shown' : '';

  const renderPlacementsGuessedHistory = (isLotteryLevel, placementsGuessed) => {
    if (isLotteryLevel) {
      return (
        <span
          onMouseEnter={() => props.handleStatusHover('Colocaciones Adivinadas')}
          onMouseLeave={() => props.handleStatusHover(false)}
          className="history__placements-guessed"
        >

          {placementsGuessed}
        </span>
      );
    }
  }

  const renderHistory = (history) => {
    return history.map(historyItem =>
      <li className="history__item" key={historyItem.index}>

        {renderPlacementsGuessedHistory(props.isLotteryLevel, historyItem.placementsGuessed)}

        {historyItem.record}

        <span
          onMouseEnter={() => props.handleStatusHover('Dígitos Adivinados')}
          onMouseLeave={() => props.handleStatusHover(false)}
          className="history__digits-guessed">

          {historyItem.digitsGuessed}
        </span>
      </li>
    );
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