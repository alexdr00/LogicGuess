import React from 'react';
import StatisticsPanel from './victory-box/StatisticsPanel';
import VictoryBoxButton from './victory-box/VictoryBoxButton';
import levelToSpanish from '../utils/levelToSpanish';
import defineTheme from '../utils/defineTheme';
import formatTimeElapsed from '../utils/formatTimeElapsed';

const VictoryMessage = (props) => {
  return (
    <div className={`victory-message-box ${defineTheme(props.level)}`}>
      <StatisticsPanel
        label="Nivel"
        value={levelToSpanish(props.level)}
      />

      <StatisticsPanel
        label="Número Generado"
        value={props.numberToGuess}
      />

      <StatisticsPanel
        label="Intentos"
        value={props.attempts}
      />

      <StatisticsPanel
        label="Tiempo Transcurrido"
        value={formatTimeElapsed(props.timeElapsed)}
      />

      <VictoryBoxButton
        label="Jugar otra vez"
        iconType="fas"
        icon="dice"
        onClick={props.handleVictoryButtonClick}
      />

      <VictoryBoxButton
        label="Guardar puntaje"
        iconType="fab"
        icon="google-plus"
        onClick={props.handleVictoryButtonClick}
      />
    </div>
  );
};

export default VictoryMessage;