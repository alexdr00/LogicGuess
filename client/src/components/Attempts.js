import React from 'react';

const Attempts = (props) => {
  return (
    <div className="attempts">
      Intentos

      {props.attempts}
    </div>
  );
};

export default Attempts;