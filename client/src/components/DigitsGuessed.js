import React from 'react';

const DigitsGuessed = (props) => {
  return (
    <div className="status status--digits-guessed ">
      {props.digitsGuessed}
    </div>
  );
};

export default DigitsGuessed;