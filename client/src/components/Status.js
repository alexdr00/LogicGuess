import React from 'react';

const Status = () => {
  return (
    <div className="game__status">
      <div className="game__status-container">
        {/* Make 'digits guessed' count */}
        Dígitos Adivinados
        <span className="game__value game__value--digits-guessed">4</span>
      </div>

      <div className="game__status-container">
        {/* Make 'placements guessed' count *just lottery mode* */}
        Orden de dígitos adivinados
        <span className="game__value game__value--placements-guessed">3</span>
      </div>

      <div className="game__status-container">
        {/* Increase one per attempt */}
        Número de intentos
        <span className="game__value game__value--attempts">5</span>
      </div>
    </div>
  );
};

export default Status;