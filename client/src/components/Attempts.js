import React from 'react';

const Attempts = (props) => {
  return (
    <div className="status status--attempts">
      {props.attempts}
    </div>
  );
};

export default Attempts;