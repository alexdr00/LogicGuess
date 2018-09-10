import React from 'react';

const SendAttemptButton = (props) => {
  return (
    <button
      className="status status__validation status__validation--submit"
      type="submit"
      form="user-digits"
      disabled={!props.canGuessBeSent}
      onClick={(event) => props.onSubmitAttempt(event)}
    >
    {props.children}
    </button>
  );
};

export default SendAttemptButton;