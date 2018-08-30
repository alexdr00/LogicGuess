import React from 'react';
import StatusType from './StatusType';

const renderPlacementsGuessed = (isLotteryLevel, placementsGuessed) => {
  if (isLotteryLevel) {
    return <StatusType
      statusName="Colocaciones Adivinadas"
      cssModifier="placements-guessed"
      statusValue={placementsGuessed}
    />
  }
}

const Status = (props) => {
  return (
    <div className="status-box">
      <StatusType
        statusName="Dígitos Adivinados"
        cssModifier="digits-guessed"
        statusValue={props.digitsGuessed}
      />

      {renderPlacementsGuessed(props.isLotteryLevel, props.placementsGuessed)}

      <StatusType
        statusName="Intentos"
        cssModifier="attempts"
        statusValue={props.attempts}
      />
    </div>
  );
};

export default Status;