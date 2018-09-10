import React from 'react';
import InputsContainer from "./InputsContainer";
import ErrorMessage from "../error/ErrorMessage";
import Status from "../status/Status";

import defineTheme from '../../lib/defineTheme';

const MainGameContainer = (props) => {
  // Show game container just when the user chooses a level
  const mainGameContainerStatus = props.level ? 'shown' : '';

  return (
    <div
      className={`main-game-container main-game-container--${mainGameContainerStatus} ${defineTheme(props.level)}`} >
      <InputsContainer
        onInputChange={props.handleInputChange}
        inputsToRender={props.digitsQuantity}
        values={props.numberBeingGuessed}
      />

      <Status
        digitsGuessed={props.digitsGuessed}
        isLotteryLevel={props.isLotteryLevel}
        placementsGuessed={props.placementsGuessed}
        attempts={props.attempts}
        canGuessBeSent={props.canGuessBeSent}
        handleSubmitAttempt={props.handleSubmitAttempt}
        handleStatusHover={props.handleStatusHover}
      />

      <ErrorMessage error={props.error} />

    </div>
  );
};

export default MainGameContainer;