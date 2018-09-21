import React from 'react';

const Score = (props) => {
  return (
    <tr>
      <td>{props.score.place}</td>
      <td>{props.score.username}</td>
      <td>{props.score.attempts}</td>
      <td>{props.score.timeElapsed}</td>
      <td>{props.score.levelSpanish}</td>
    </tr>
  );
};

export default Score;