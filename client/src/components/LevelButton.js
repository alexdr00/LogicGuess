import React from 'react';

const LevelButton = (props) => {
  return (
    <button
      className={`levels-box__level-button levels-box__level-button--${props.level}`}
      onClick={() => props.onClick(props.level)}
    >
      {props.buttonText}
    </button>
  );
};

export default LevelButton;