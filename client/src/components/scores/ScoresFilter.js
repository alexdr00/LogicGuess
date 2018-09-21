import React from 'react';

const ScoresFilter = (props) => {
  return (
    <button onClick={() => props.onFilterClick(props.fieldShown)}>
      {props.buttonLabel}
    </button>
  );
};

export default ScoresFilter;