import React from 'react';

const DigitInput = (props) => {
  return (
    <input
      type="text"
      maxLength="1"
      className="inputs-box__digit-input"
      onChange={(event) => props.onChange(event, props.index)}
    />
  );
};

export default DigitInput;