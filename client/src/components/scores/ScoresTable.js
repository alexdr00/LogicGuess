import React from 'react';
import Score from './Score';

const Table = (props) => {
  const renderScores = (scores) => {
    const scoresList = [];

    try {
      scores[props.page].forEach(score => {
        scoresList.push(<Score key={score.place} score={score} />)
      });
    } catch (error) {
      return (
        <tr>
          <td colSpan="5" style={{ textAlign: 'center' }}>
            No se encontraron resultados
          </td>
        </tr>
      );
    }

    return scoresList;
  }

  return (
    <div className="scores-table">
      <table>
        <thead>
          <tr>
            <th>Lugar</th>
            <th>Usuario</th>
            <th>Intentos</th>
            <th>Tiempo</th>
            <th>Nivel</th>
          </tr>
        </thead>
        <tbody>
          {renderScores(props.scores)}
        </tbody>
      </table>
    </div>
  );
};

export default Table;