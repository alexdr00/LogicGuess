import React, { Component } from 'react';

class Manual extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="manual">
          <div className="manual__section manual__section--context">
            <h2 className="manual__title">Contexto</h2>
            <ul>
              <li>El juego generará un número al azar</li>
              <li>Ese número tendrá una cantidad determinada de dígitos</li>
              <li>La cantidad de dígitos que tenga tal número depende del nivel que escojas</li>
              <li>Debes adivinar todos los dígitos que el juego generó</li>
              <li>Pon a prueba tu lógica</li>
            </ul>
          </div>

          <div className="manual__section manual__section--rules">
            <h2 className="manual__title">Reglas</h2>
            <ul>
              <li>No puedes repetir dígitos</li>
              <li>No te preocupes, el juego tampoco generará un número que tenga dígitos repetidos</li>
              <li>El juego te dirá la cantidad de dígitos que adivinaste</li>
              <li>El orden en que coloques los dígitos no importa. Solo debes adivinarlos  (excepto en nivel Lotería)
              </li>
              <li>Cada vez que reinicies el juego, se generará un nuevo número</li>
              <li>
                Mientras menos intentos necesites para ganar, estarás mejor ubicado en la tabla de posiciones (comparado con otros jugadores)
              </li>
            </ul>

            <h3 className="manual__title">Nivel Lotería</h3>
            <ul>
              <li>En este nivel sí importa el orden en que coloques los dígitos</li>
              <li>El juego te dirá la cantidad de colocaciones que adivinaste</li>
              <li>El resto de reglas sigue aplicando</li>
            </ul>

          </div>

          <div className="manual__section manual__section--levels">
            <h2 className="manual__title">Niveles</h2>
            <p><span className="manual__subtitle">Fácil: </span> 4 dígitos a adivinar</p>

            <p><span className="manual__subtitle">Moderado: </span> 5 dígitos a adivinar</p>

            <p><span className="manual__subtitle">Difícil: </span> 6 dígitos a adivinar</p>

            <p><span className="manual__subtitle">Lotería: </span> 5 dígitos a adivinar</p>

          </div>

          <div className="manual__section manual__section--examples">
            <h2 className="manual__title">Ejemplo</h2>
              <ul>
                <li>Escogiste nivel moderado</li>
                <li>El juego genera un número al azar con 5 dígitos (<span className="guessed">8 1 0 4</span> 9)</li>
                <li>Tú enviaste el siguiente número: 7 <span className="guessed">0 8 1 4</span></li>
                <li>El juego te dice que adivinaste 4 dígitos (0, 8, 1, 4)</li>
                <li>Cuando adivines todos los dígitos, ganas (<span className="guessed">9 4 0 1 8</span>)</li>
              </ul>
              <h3 className="manual__title">Como puedes ver...</h3>
              <ul>
                <li>El orden no importa</li>
                <h3 className="manual__title">Pero...</h3>
                <li>Si hubieras elegido nivel Lotería, aparte de adivinar todos los dígitos, también tienes que adivinar el orden en que el juego los generó</li>
                <li>En pocas palabras, para ganar, tienes que colocar el número tal cual como fue generado (<span className="guessed">8 1 0 4 9</span>)</li>

              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Manual;