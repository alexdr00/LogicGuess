import React from 'react';

const ScoresFilter = (props) => {
  return (
    <button
      className={`filters__button filters__button--${props.fieldShown}`}
      onClick={() => props.onFilterClick(props.fieldShown)}>
      {props.buttonLabel}
    </button>
  );
};

export default ScoresFilter;