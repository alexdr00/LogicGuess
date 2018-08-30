// Components
import React, { Component } from 'react';
import ChooseLevelBox from '../components/ChooseLevel';
import Level from '../components/Level';
import InputsContainer from '../components/InputsContainer';
import Status from '../components/Status';
import History from '../components/History';
import ErrorMessage from '../components/ErrorMessage';
import VictoryMessage from '../components/VictoryMessage';

// Dependencies
import * as validate from '../utils/inputValidations';
import generateNumberToGuess from '../utils/generateNumber';
import addRecordToHistory from '../utils/addRecordToHistory';
import countGuessed from '../utils/countGuessed';
import getDigitsQuantity from '../utils/getDigitsQuantity';
import levelToSpanish from '../utils/levelToSpanish';
import checkPlayerHasWon from '../utils/checkPlayerHasWon';

class Game extends Component {
  constructor(props) {
    super(props);

    this.handleLevelChoose = this.handleLevelChoose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitAttempt = this.handleSubmitAttempt.bind(this);

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
    }
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
      isLotteryLevel: level === 'lottery' ? true : false,
    });
  }

  /**
   * Handles input when user types something in
   *
   * @param {object} event - event specifications
   * @param {int} index - Input placement
   */
  handleInputChange(event, index) {
    const inputDigit = event.target.value;
    const digitsQuantity = this.state.digitsQuantity;
    const numberBeingGuessed = this.addDigit(this.state.numberBeingGuessed, index, inputDigit);

    // ** Input Validations **
    // checks if input is a blank space
    if (inputDigit.trim() === "") {
      this.setState({ canGuessBeSent: false });
      return;
    }

    if (isNaN(inputDigit)) {
      this.setState({
        canGuessBeSent: false,
        error: 'Debe ser número entero',
      });
      return;
    }

    if (validate.hasDuplicateDigits(numberBeingGuessed)) {
      this.setState({
        canGuessBeSent: false,
        error: 'No puedes repetir dígitos',
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
    const history = addRecordToHistory(numberBeingGuessed, this.state.history);
    const isLotteryLevel = this.state.isLotteryLevel;
    // checks if player won
    const hasPlayerWon = checkPlayerHasWon(digitsGuessed, placementsGuessed, numberToGuess,isLotteryLevel);

    this.setState({
      attempts,
      digitsGuessed,
      placementsGuessed,
      numberBeingGuessed: [],
      canGuessBeSent: false,
      history,
    });

    if (hasPlayerWon) {
      this.setState({ hasPlayerWon });
    }
  }

  /**
   * Adds a digit to the number the user is trying to guess
   *
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
    numberBeingGuessed = numberBeingGuessed
    .filter(digit => Number.isInteger(digit));

    return numberBeingGuessed;
  }

  /**
   * Renders an error if any
   * @param {string} error - Error to display
   */
  renderErrorMessage(error) {
    if (error) {
      return <ErrorMessage error={error} />
    }
  }

  /**
   * Shows the user the level box where it can choose a level
   * If the user already chose one, hide it with a nice effect.
   */
  renderChooseLevelBox() {
    if (!this.state.level) {
      return <ChooseLevelBox onLevelChoose={this.handleLevelChoose} show />;
    }
    // Hide effect when user chooses a level
    return <ChooseLevelBox hide />;
  }

  renderVictoryMessage(hasUserWon) {
    if (hasUserWon) {
      return <VictoryMessage />
    }
  }

  render() {
    return (
      <div className="main-content">
        <div className="game">
          {/* Trap (just in development) */}
          {console.log(this.state.numberToGuess)}

          {this.renderChooseLevelBox()}

          <History
            history={this.state.history}
          />

          <Level level={levelToSpanish(this.state.level)}/ >

          <InputsContainer
            onInputChange={this.handleInputChange}
            inputsToRender={this.state.digitsQuantity}
            canGuessBeSent={this.state.canGuessBeSent}
            onSubmitAttempt={this.handleSubmitAttempt}
            values={this.state.numberBeingGuessed}
          />

          {this.renderErrorMessage(this.state.error)}
          {this.renderVictoryMessage(this.state.hasPlayerWon)}

          <Status
            attempts={this.state.attempts}
            digitsGuessed={this.state.digitsGuessed}
            placementsGuessed={this.state.placementsGuessed}
            isLotteryLevel={this.state.isLotteryLevel}
          />
        </div>
      </div>
    );
  }
}

export default Game;