import React from 'react';

const SendAttemptButton = (props) => {
  return (
    <div className="send-attempt-button">
      <button
        type="submit"
        form="user-digits"
        disabled={!props.canGuessBeSent} className="inputs-box__submit-guess"
        onClick={(event) => props.onSubmitAttempt(event)} >

        Intentar

      </button>
    </div>
  );
};

export default SendAttemptButton;