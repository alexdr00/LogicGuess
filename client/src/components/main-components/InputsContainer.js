import React from 'react';
import DigitInput from '../input/DigitInput';

const InputsContainer = (props) => {

  /** Render a certain quantity of inputs, based on level chosen.
   * @return {array} an array contaning the quantity of inputs that will be rendered
   */
  const renderInputs = () => {
    const inputsToRender = [];

    // To keep the component controlled, when the user has't typed
    // anything in the input, just set its value to an empty string.
    for (let i = 0; i < props.inputsToRender; i++) {
      // Stores everything but falsy values (i.e backspace, space).
      let inputValue = props.values[i] || '';
      // Since 0 is falsy, it is necessary no to exclude it.
      // This way, the 0 can be reflected when the user types it.
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