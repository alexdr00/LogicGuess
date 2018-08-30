import React from 'react';

const History = (props) => {
  const renderHistories = (history) => {
    return history.map(record => <li key={history.indexOf(record)}>{record}</li>)
  }

  return (
    <div className="history">
      <ul>
        {renderHistories(props.history)}
      </ul>
    </div>
  );
};

export default History;