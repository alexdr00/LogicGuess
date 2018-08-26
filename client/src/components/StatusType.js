import React from 'react';

const StatusType = (props) => {
  return (
    <div className="status-box__status">
      {/* Make 'digits guessed' count */}
      {props.statusName}
      <span
        className={`status-box__value status-box__value--${props.cssModifier}`}
      >
        {props.statusValue}
      </span>
    </div>
  );
};

export default StatusType;