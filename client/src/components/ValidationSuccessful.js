import React from 'react';
import SendAttemptButton from "./SendAttemptButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ValidationSuccessful = (props) => {
  const config = {
    angle: 94,
    spread: 107,
    startVelocity: 55,
    elementCount: 108,
    decay: 0.87
  };

  const renderValidationStatus = (canGuessBeSent, onSubmitAttempt) => {
    if (canGuessBeSent) {
      return (
        <SendAttemptButton
          canGuessBeSent={canGuessBeSent}
          onSubmitAttempt={onSubmitAttempt}
        >

          <FontAwesomeIcon
            icon={['fas', 'check']}
            className="status__success-icon"
          />

        </SendAttemptButton>
      );
    }

    return (
      <div className="status status__validation status__validation--error">
        <FontAwesomeIcon
          icon={['fas', 'times']}
          className="status__error-icon"
        />
      </div>
    );
  }

  return renderValidationStatus(props.canGuessBeSent, props.onSubmitAttempt);
};

export default ValidationSuccessful;