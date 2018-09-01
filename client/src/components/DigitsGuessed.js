import React from 'react';

const DigitsGuessed = (props) => {
  return (
    <div className="digits-guessed">
      Intentos

      {props.digitsGuessed}
    </div>
  );
};

export default DigitsGuessed;