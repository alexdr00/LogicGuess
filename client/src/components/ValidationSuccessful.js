import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ValidationSuccessful = (props) => {
  const renderIcon = (canGuessBeSent) => {
    if (canGuessBeSent) {
      return <FontAwesomeIcon icon={['fas', 'check']} />;
    }

    return <FontAwesomeIcon icon={['fas', 'times']} />;
  }

  return (
    <div className="status status--success">
      {renderIcon(props.canGuessBeSent)}
    </div>
  );
};

export default ValidationSuccessful;