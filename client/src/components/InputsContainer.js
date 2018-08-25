import React from 'react';
import DigitInput from './DigitInput';

const InputsContainer = () => {
  return (
    <div>
      <form className="game__inputs-container">

        <div className="game__inputs">
          <DigitInput />
        </div>

        <div className="game__inputs-button">
          <button type="submit" className="game__submit-guess">Intentar</button>
        </div>
      </form>
    </div>
  );
};

export default InputsContainer;