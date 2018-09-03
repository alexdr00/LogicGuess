import React from 'react';

const PlacementsGuessed = (props) => {
  return (
    <div className="status status--placements-guessed">
      {props.placementsGuessed}
    </div>
  );
};

export default PlacementsGuessed;