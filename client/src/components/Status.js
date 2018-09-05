import React from 'react';
import PlacementsGuessed from "./PlacementsGuessed";
import Attempts from "./Attempts";
import DigitsGuessed from "./DigitsGuessed";
import ValidationSuccessful from "./ValidationSuccessful";

const Status = (props) => {
  const renderPlacementsGuessed = (isLotteryLevel, placementsGuessed) => {
    if (isLotteryLevel) {
      return <PlacementsGuessed placementsGuessed={placementsGuessed} />;
    }
  }

  return (
    <div>
      <DigitsGuessed digitsGuessed={props.digitsGuessed} />

      {renderPlacementsGuessed(
        props.isLotteryLevel,
        props.placementsGuessed
      )}

      <Attempts attempts={props.attempts} />

      <ValidationSuccessful canGuessBeSent={props.canGuessBeSent} />
    </div>
  );
}

export default Status;