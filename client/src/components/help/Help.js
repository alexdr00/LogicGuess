import React from 'react';

// This component contains a little help which is shown
// when the user hovers on certain components
const Help = (props) => {
  const helpStatus = props.help ? 'shown' : 'hidden';

  return (
    <div className={`help help--${helpStatus}`}>
      {props.help}
    </div>
  );
};

export default Help;