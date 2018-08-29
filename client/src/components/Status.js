import React from 'react';
import StatusType from './StatusType';

const Status = (props) => {
  return (
    <div className="status-box">
      <StatusType
        statusName="Dígitos Adivinados"
        cssModifier="digits-guessed"
        statusValue={props.digitsGuessed}
      />

      <StatusType
        statusName="Colocaciones Adivinadas"
        cssModifier="placements-guessed"
        statusValue={props.placementsGuessed}
      />

      <StatusType
        statusName="Intentos"
        cssModifier="attempts"
        statusValue={props.attempts}
      />
    </div>
  );
};

export default Status;