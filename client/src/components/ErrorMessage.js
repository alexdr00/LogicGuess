import React from 'react';

const ErrorMessage = (props) => {
  return (
    <div className="error">
      {props.error}
    </div>
  );
};

export default ErrorMessage;