import React from 'react';
import InputsContainer from "./InputsContainer";
import ErrorMessage from "../components/ErrorMessage";
import Status from "./Status";

import defineTheme from '../utils/defineTheme';

const MainGameContainer = (props) => {
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
      />

      <ErrorMessage error={props.error} />

    </div>
  );
};

export default MainGameContainer;