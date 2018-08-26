import React from 'react';
import StatusType from './StatusType';

const Status = () => {
  return (
    <div className="status-box">
      <StatusType
        statusName="Dígitos Adivinados"
        cssModifier="digits-guessed"
        statusValue="5"
      />

      <StatusType
        statusName="Colocaciones Adivinadas"
        cssModifier="placements-guessed"
        statusValue="2"
      />

      <StatusType
        statusName="Intentos"
        cssModifier="attempts"
        statusValue="3"
      />
    </div>
  );
};

export default Status;