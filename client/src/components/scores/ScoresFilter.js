import React from 'react';

const ScoresFilter = (props) => {
  return (
    <button
      className="filter__button"
      onClick={() => props.onFilterClick(props.fieldShown)}>
      {props.buttonLabel}
    </button>
  );
};

export default ScoresFilter;