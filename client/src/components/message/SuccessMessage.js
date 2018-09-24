import React from 'react';

const SuccessMessage = (props) => {
  const messageStatus = props.isShown ? 'shown' : 'hidden';

  return (
    <div className={`success-message success-message--${messageStatus}`}>
      ¡Tu puntaje se ha guardado exitosamente!
    </div>
  );
};

export default SuccessMessage;