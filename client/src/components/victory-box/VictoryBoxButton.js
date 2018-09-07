import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VictoryBoxButton = (props) => {
  return (
    <div className="victory-message-box__button">
      <div className="victory-message-box__button-title">{props.label}</div>
        <FontAwesomeIcon
          icon={[props.iconType, props.icon]}
          className="victory-message-box__icon"
        />
    </div>
  );
};

export default VictoryBoxButton;