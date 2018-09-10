import React from 'react';

const Attempts = (props) => {
  // Label to show in the help
  const componentLabel = "Intentos";

  return (
    <div
      onMouseOver={() => props.onStatusHover(componentLabel)}
      onMouseLeave={() => props.onStatusHover(false)}
      className="status status--attempts"
    >
      {props.attempts}
    </div>
  );
};

export default Attempts;