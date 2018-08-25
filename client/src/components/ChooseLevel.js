import React from 'react';

const ChooseLevelBox = (props) => {
  const componentStatus = props.show ? 'shown' : 'hidden';

  return (
    <div className={`game__choose-level game__choose-level--${componentStatus}`}>
      <button
        className="game__level-box"
        onClick={() => props.onLevelChoose('facil')}
      >
        Fácil
      </button>

      <button
        className="game__level-box"
        onClick={() => props.onLevelChoose('moderado')}
      >
        Moderado
      </button>

      <button
        className="game__level-box"
        onClick={() => props.onLevelChoose('dificil')}
      >
        Difícil
      </button>

      <button
        className="game__level-box"
        onClick={() => props.onLevelChoose('loteria')}
      >
        Lotería
      </button>

    </div>
  );
};

export default ChooseLevelBox;