// Components
import React, { Component } from "react";
import ChooseLevelBox from "../components/ChooseLevel";
import History from "../components/History";
import VictoryMessageBox from "../components/VictoryMessageBox";
import MainGameContainer from "../components/MainGameContainer";
import Confetti from "react-dom-confetti";
import Help from "../components/help/Help";
import Timer from "../components/timer/Timer";

// Dependencies
import * as validate from "../utils/inputValidations";
import generateNumberToGuess from "../utils/generateNumber";
import addRecordToHistory from "../utils/addRecordToHistory";
import countGuessed from "../utils/countGuessed";
import getDigitsQuantity from "../utils/getDigitsQuantity";
import checkPlayerHasWon from "../utils/checkPlayerHasWon";

class Game extends Component {
  constructor(props) {
    super(props);

    this.handleLevelChoose = this.handleLevelChoose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitAttempt = this.handleSubmitAttempt.bind(this);
    this.handleStatusHover = this.handleStatusHover.bind(this);

    this.confettiConfig = {
      angle: 270,
      spread: 289,
      startVelocity: 35,
      elementCount: 178,
      decay: 0.9,
      colors: [
        '#6bbaa7',
        '#fba100',
        '#cf6766',
        '#6c648b',
      ]
    };

    this.state = {
      attempts: 0,
      digitsGuessed: 0,
      placementsGuessed: 0,
      history: [],
      level: null,
      numberToGuess: null,
      digitsQuantity: null,
      isLotteryLevel: null,
      numberBeingGuessed: [],
      canGuessBeSent: false,
      hasPlayerWon: false,
      error: null,
      helpLabel: '',
      timeElapsed: 0,
    };
  }

  /**
   * Sets up the game basic data to start playing.
   * based on the level chosen
   *
   * @param {string} level - level chosen by player
   */
  handleLevelChoose(level) {
    const digitsQuantity = getDigitsQuantity(level);
    const numberToGuess = generateNumberToGuess(digitsQuantity);

    this.setState({
      level,
      numberToGuess,
      digitsQuantity,
      isLotteryLevel: level === "lottery" ? true : false
    }, () => {
      // Focuses the first input
      document.querySelector('.inputs-box__digit-input').focus();
    });
  }

  /**
   * Handles input when user types something in
   * @param {object} event - Event
   * @param {int} index - Input placement
   */
  handleInputChange(event, index) {
    const inputDigit = event.target.value;
    const digitsQuantity = this.state.digitsQuantity;
    const numberBeingGuessed = this.addDigit(
      this.state.numberBeingGuessed,
      index,
      inputDigit
    );

    // ** Input Validations **
    // checks if input is a blank space
    if (inputDigit.trim() === "") {
      this.setState({ canGuessBeSent: false });
      return;
    }

    if (isNaN(inputDigit)) {
      this.setState({
        canGuessBeSent: false,
        error: "Debe ser número entero"
      });
      return;
    }

    if (validate.hasDuplicateDigits(numberBeingGuessed)) {
      this.setState({
        canGuessBeSent: false,
        error: "No puedes repetir dígitos"
      });
      return;
    }

    // If there is no error, clean the state up
    this.setState({ error: null });

    // Autotab
    if (event.target.nextSibling) {
      event.target.nextSibling.focus();
    }

    // If everything is alright allow submitting the form
    if (validate.hasRequiredDigits(digitsQuantity, numberBeingGuessed)) {
      this.setState({ canGuessBeSent: true });
      return;
    }
  }

  handleSubmitAttempt(event) {
    event.preventDefault();

    const numberBeingGuessed = this.state.numberBeingGuessed;
    const numberToGuess = this.state.numberToGuess;
    const guessed = countGuessed(numberBeingGuessed, numberToGuess);
    const { digitsGuessed } = guessed;
    const { placementsGuessed } = guessed;
    const attempts = this.state.attempts + 1;
    const history = addRecordToHistory(numberBeingGuessed, digitsGuessed, placementsGuessed, this.state.history);
    const isLotteryLevel = this.state.isLotteryLevel;
    // checks if player won
    const hasPlayerWon = checkPlayerHasWon(
      digitsGuessed,
      placementsGuessed,
      numberToGuess,
      isLotteryLevel
    );

    this.setState({
      attempts,
      digitsGuessed,
      placementsGuessed,
      numberBeingGuessed: [],
      canGuessBeSent: false,
      history
    });

    // Focuses the first input
    document.querySelector('.inputs-box__digit-input').focus();

    if (hasPlayerWon) {
      this.setState({ hasPlayerWon });
    }
  }

  /**
   * Adds a digit to the number the user is trying to guess
   * @param {array} numberBeingGuessed - Array of digits that the user has typed
   * @param {int} index - index of current input
   * @param {string|int} value - value entered
   * @return {array} Array of digits the user has typed (updated)
   */
  addDigit(numberBeingGuessed, index, value) {
    // Copies array to keep immutability
    numberBeingGuessed = numberBeingGuessed.slice();

    value = parseInt(value, 0);
    numberBeingGuessed[index] = value;

    // Updates state with current structure and values
    this.setState({ numberBeingGuessed });

    // filters non-integers
    numberBeingGuessed = numberBeingGuessed.filter(digit =>
      Number.isInteger(digit)
    );

    return numberBeingGuessed;
  }

  handleStatusHover(componentHovered) {
    if (componentHovered) {
      this.setState({ helpLabel: componentHovered });
      return;
    }

    this.setState({ helpLabel: '' });
  }

  handleVictoryButtonClick(label) {
    if (label === "Jugar otra vez") {
      window.location.reload();
    }
  }

  /**
   * Shows the user the level box where they can choose a level
   * If the user already chose one, hide it with a nice effect.
   */
  renderChooseLevelBox() {
    if (!this.state.level) {
      return <ChooseLevelBox onLevelChoose={this.handleLevelChoose} show />;
    }
    // Hide effect when user chooses a level
    return <ChooseLevelBox hide />;
  }

  renderVictoryMessage(hasPlayerWon, attempts, level, numberToGuess, timeElapsed) {
    if (hasPlayerWon) {
      return (
        <VictoryMessageBox
          attempts={attempts}
          level={level}
          numberToGuess={numberToGuess}
          timeElapsed={timeElapsed}
          handleVictoryButtonClick={this.handleVictoryButtonClick}

        />
      );
    }
  }

  countSeconds(secondsElapsed) {
    setTimeout(() => {
      this.setState({ timeElapsed: secondsElapsed + 1 })
    }, 1000);
  }

  renderTimer(level, timeElapsed, hasPlayerWon) {
    if (level && !hasPlayerWon) {
      this.countSeconds(timeElapsed)
      return <Timer level={level} timeElapsed={timeElapsed} />
    }
  }

  render() {
    return (
      <div className="main-content">
        <div className="game">
          {/* Trap (just in development) */}
          {console.log(this.state.numberToGuess)}

          {this.renderChooseLevelBox()}

          <MainGameContainer
            digitsGuessed={this.state.digitsGuessed}
            placementsGuessed={this.state.placementsGuessed}
            attempts={this.state.attempts}
            isLotteryLevel={this.state.isLotteryLevel}
            digitsQuantity={this.state.digitsQuantity}
            numberBeingGuessed={this.state.numberBeingGuessed}
            canGuessBeSent={this.state.canGuessBeSent}
            error={this.state.error}
            level={this.state.level}
            handleInputChange={this.handleInputChange}
            handleSubmitAttempt={this.handleSubmitAttempt}
            handleStatusHover={this.handleStatusHover}
          />

          {this.renderTimer(
            this.state.level,
            this.state.timeElapsed,
            this.state.hasPlayerWon
          )}

          {this.renderVictoryMessage(
            this.state.hasPlayerWon,
            this.state.attempts,
            this.state.level,
            this.state.numberToGuess,
            this.state.timeElapsed,
          )}

          <History
            history={this.state.history}
            level={this.state.level}
            digitsGuessed={this.state.digitsGuessed}
            isLotteryLevel={this.state.isLotteryLevel}
            handleStatusHover={this.handleStatusHover}
          />

          <Help  help={this.state.helpLabel} />

          {/* Confetti when user wins */}
          <Confetti
            active={ this.state.hasPlayerWon }
            className="confetti"
            config={ this.confettiConfig }
          />

        </div>
      </div>
    );
  }
}

export default Game;
