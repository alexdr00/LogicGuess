import React from 'react';

import defineTheme from '../../lib/defineTheme';

const History = (props) => {
  // Show just when user submits their first guess
  const historyStatus = props.history != false ? 'shown' : '';

  /**
   * Show this status history just when user chose lottery level
   * @param {boolean} isLotteryLevel - true if user chose lottery level
   * @param {int} placementsGuessed - quantity of placements the user guessed
   */
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