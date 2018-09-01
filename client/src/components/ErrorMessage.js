import React from 'react';

const ErrorMessage = (props) => {
  return (
    <div className="error-message">
      {props.error}
    </div>
  );
};

export default ErrorMessage;