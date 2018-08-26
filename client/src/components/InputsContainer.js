import React from 'react';
import DigitInput from './DigitInput';

const InputsContainer = (props) => {
  const renderInputs = () => {
    const inputsToRender = [];

    for (let i = 0; i < props.inputsToRender; i++) {
      inputsToRender.push(<DigitInput />);
    }

    return inputsToRender;
  }

  return (
    <div>
      <form className="inputs-box">

        <div className="inputs-box__inputs">
          {renderInputs()}
        </div>

        <div className="inputs-box__inputs-button">
          <button type="submit" className="inputs-box__submit-guess">Intentar</button>
        </div>
      </form>
    </div>
  );
};

export default InputsContainer;