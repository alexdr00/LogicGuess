import React from 'react';
import DigitInput from './DigitInput';

const InputsContainer = (props) => {

  /** Render certain quantity of inputs, based on level chosen.
   * @return {array} an array contaning the inputs that are to be returned
   */
  const renderInputs = () => {
    const inputsToRender = [];

    for (let i = 0; i < props.inputsToRender; i++) {
      // Stores everything but falsy values
      let inputValue = props.values[i] || '';
      // Since 0 is falsy, it is necessary no to exclude it.
      if (props.values[i] === 0) {
        inputValue = props.values[i];
      }

      inputsToRender.push(
        <DigitInput
          key={i}
          onChange={props.onInputChange}
          index={i}
          value={inputValue}
        />
      );
    }

    return inputsToRender;
  }

  return (
    <div>
      <form className="inputs-box" id="user-digits">
        <div className="inputs-box__inputs">
          {renderInputs()}
        </div>
      </form>
    </div>
  );
};

export default InputsContainer;