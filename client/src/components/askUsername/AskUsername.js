import React from 'react';

const AskUsername = (props) => {
  return (
    <div>
      <h2>¡Hola {props.name}! Ingresa un nombre de usuario</h2>
      <form onSubmit={() => props.onUsernameSubmission()}>
        <input onChange={(event) => props.onInputChange(event)} type="text"/>
        <button type="submit" value={props.value}>Enviar</button>
      </form>
    </div>
  );
};

export default AskUsername;