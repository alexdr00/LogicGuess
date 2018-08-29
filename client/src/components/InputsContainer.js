import React from 'react';
import DigitInput from './DigitInput';

const InputsContainer = (props) => {

  /** Render certain quantity of inputs, based on level chosen.
   * @return {array} an array contaning the inputs that are to be returned
   */
  const renderInputs = () => {
    const inputsToRender = [];

    for (let i = 0; i < props.inputsToRender; i++) {
      inputsToRender
        .push(<DigitInput key={i} onChange={props.onInputChange} index={i} />);
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
          <button
            type="button"
            disabled={!props.canGuessBeSent} className="inputs-box__submit-guess"
            onClick={(event) => props.onSubmitAttempt(event)}
          >

            Intentar

            </button>
        </div>
      </form>
    </div>
  );
};

export default InputsContainer;