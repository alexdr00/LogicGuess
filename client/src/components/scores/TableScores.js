import React from 'react';
import Score from './Score';

const Table = (props) => {
  const renderScores = (scores) => {
    const scoresList = [];

    scores.map(score => {
      scoresList.push(<Score key={score.place} score={score} />)
    });

    return scoresList;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Lugar</th>
          <th>Usuario</th>
          <th>Intentos</th>
          <th>Tiempo Transcurrido</th>
          <th>Nivel</th>
        </tr>
      </thead>
      <tbody>
        {renderScores(props.scores)}
      </tbody>
    </table>
  );
};

export default Table;