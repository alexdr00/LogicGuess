import React from 'react';

const DigitsGuessed = (props) => {
  const componentLabel = "Dígitos Adivinados";

  return (
    <div
      onMouseEnter={() => props.onStatusHover(componentLabel)}
      onMouseLeave={() => props.onStatusHover(false)}
      className="status status--digits-guessed "
    >
      {props.digitsGuessed}
    </div>
  );
};

export default DigitsGuessed;