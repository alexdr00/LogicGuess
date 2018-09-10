import React from 'react';
import LevelButton from '../level-selection/LevelButton';

const ChooseLevelBox = (props) => {
  const componentStatus = props.show ? 'shown' : 'hidden';

  return (
    <div className={`levels-box levels-box--${componentStatus}`}>
      <LevelButton
        onClick={props.onLevelChoose}
        buttonText="Fácil"
        level="easy"
      />

      <LevelButton
        onClick={props.onLevelChoose}
        buttonText="Moderado"
        level="moderate"
      />

      <LevelButton
        onClick={props.onLevelChoose}
        buttonText="Difícil"
        level="hard"
      />

      <LevelButton
        onClick={props.onLevelChoose}
        buttonText="Lotería"
        level="lottery"
      />

    </div>
  );
};

export default ChooseLevelBox;