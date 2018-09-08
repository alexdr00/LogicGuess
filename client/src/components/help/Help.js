import React from 'react';

const Help = (props) => {
  const helpStatus = props.help ? 'shown' : 'hidden';

  return (
    <div className={`help help--${helpStatus}`}>
      {props.help}
    </div>
  );
};

export default Help;