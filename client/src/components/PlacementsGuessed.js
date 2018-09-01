import React from 'react';

const PlacementsGuessed = (props) => {
  return (
    <div className="placements-guessed">
      Colocaciones

      {props.placementsGuessed}
    </div>
  );
};

export default PlacementsGuessed;