import React from 'react';
import InputsContainer from "./InputsContainer";
import PlacementsGuessed from "./PlacementsGuessed";
import Attempts from "./Attempts";
import DigitsGuessed from "./DigitsGuessed";
import ValidationSuccessful from "./ValidationSuccessful";

const MainGameContainer = (props) => {

  const renderPlacementsGuessed = (isLotteryLevel, placementsGuessed) => {
    if (isLotteryLevel) {
      return <PlacementsGuessed placementsGuessed={placementsGuessed} />;
    }
  }

  return (
    <div className="main-game-container">

      <DigitsGuessed digitsGuessed={props.digitsGuessed} />

      {renderPlacementsGuessed(
        props.isLotteryLevel,
        props.placementsGuessed
      )}

      <Attempts attempts={props.attempts} />

      <ValidationSuccessful canGuessBeSent={props.canGuessBeSent} />

      <InputsContainer
        onInputChange={props.handleInputChange}
        inputsToRender={props.digitsQuantity}
        values={props.numberBeingGuessed}
      />
    </div>
  );
};

export default MainGameContainer;