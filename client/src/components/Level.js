import React from 'react';

const Level = (props) => {
  return (
    <div className="game__level">
      <p>{props.level}</p>
    </div>
  );
};

export default Level;