import React from 'react';
import PlacementsGuessed from "./PlacementsGuessed";
import Attempts from "./Attempts";
import DigitsGuessed from "./DigitsGuessed";
import ValidationSuccessful from "./ValidationSuccessful";

const Status = (props) => {
  const renderPlacementsGuessed = (isLotteryLevel, placementsGuessed) => {
    if (isLotteryLevel) {
      return <PlacementsGuessed
        placementsGuessed={placementsGuessed}
        onStatusHover={props.handleStatusHover} />;
    }
  }

  return (
    <div>
      <DigitsGuessed
        onStatusHover={props.handleStatusHover}
        digitsGuessed={props.digitsGuessed}
      />

      {renderPlacementsGuessed(
        props.isLotteryLevel,
        props.placementsGuessed
      )}

      <Attempts attempts={props.attempts} onStatusHover={props.handleStatusHover}/>

      <ValidationSuccessful
        canGuessBeSent={props.canGuessBeSent}
        onSubmitAttempt={props.handleSubmitAttempt}
        onStatusHover={props.handleStatusHover}
      />
    </div>
  );
}

export default Status;