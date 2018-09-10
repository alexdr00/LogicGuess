import React from 'react';

const ErrorMessage = (props) => {
  const errorStatus = props.error ? 'active' : 'inactive';

  return (
    <div className={`error-message error-message--${errorStatus}`}>
      {props.error}
    </div>
  );
};

export default ErrorMessage;