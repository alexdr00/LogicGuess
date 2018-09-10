import React from 'react';
import SendAttemptButton from "./SendAttemptButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ValidationSuccessful = (props) => {
  /**
   * Shows a success icon when the user has no error in their input.
   * If the user has errors shows an X instead.
   * @param {boolean} canGuessBeSent - true if user has no errors in their input
   * @param {function} onSubmitAttempt - Handles attempt submission
   */
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