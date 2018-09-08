import React from 'react';

const PlacementsGuessed = (props) => {
  const componentLabel = "Colocaciones Adivinadas";

  return (
    <div
      onMouseEnter={() => props.onStatusHover(componentLabel)}
      onMouseLeave={() => props.onStatusHover(false)}
      className="status status--placements-guessed"
    >
      {props.placementsGuessed}
    </div>
  );
};

export default PlacementsGuessed;