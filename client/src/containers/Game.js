import React, { Component } from 'react';
import ChooseLevelBox from '../components/ChooseLevel';
import Level from '../components/Level';
import InputsContainer from '../components/InputsContainer';
import Status from '../components/Status';
import ErrorMessage from '../components/ErrorMessage';

class Game extends Component {
  constructor(props) {
    super(props);

    this.handleLevelChoose = this.handleLevelChoose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      attempts: 0,
      digitsGuessed: null,
      placementsGuessed: null,
      level: null,
      numberToGuess: null,
      digitsQuantity: null,
      isLotteryLevel: null,
      numberBeingGuessed: [],
      canGuessBeSent: false,
      error: null
    }
  }

  /**
   * Sets up the game basic data to start playing.
   * based on the level chosen
   *
   * @param {string} level - level chosen by player
   */
  handleLevelChoose(level) {
    const digitsQuantity = this.getDigitsQuantity(level);
    const numberToGuess = this.generateNumberToGuess(digitsQuantity);

    this.setState({
      level,
      numberToGuess,
      digitsQuantity,
      isLotteryLevel: level === 'lottery' ? true : false,
    });
  }

  /**
   * Performs validations to the user input
   *
   * @param {object} event - event specifications
   * @param {int} index - Input placement
   */
  handleInputChange(event, index) {
    const inputDigit = event.target.value;
    const digitsQuantity = this.state.digitsQuantity;
    const numberBeingGuessed = this.addDigit(this.state.numberBeingGuessed, index, inputDigit);

    // ** Input Validations **
    if (isNaN(inputDigit)) {
      this.setState({
        canGuessBeSent: false,
        error: 'Debe ser número entero',
      });
      return;
    }

    if (this.hasDuplicateDigits(numberBeingGuessed)) {
      this.setState({
        canGuessBeSent: false,
        error: 'No puedes repetir dígitos',
      });
      return;
    }

    // If there is no error, clean the state
    this.setState({ error: null });

    // If the input is a blank space, prevent from submitting
    // without showing any error
    if (inputDigit == false) {
      this.setState({ canGuessBeSent: false });
      return;
    }

    // If everything is alright allow submitting the form
    if (this.hasRequiredDigits(digitsQuantity, numberBeingGuessed)) {
      this.setState({ canGuessBeSent: true });
      return;
    }
  }

  /**
   * Add a digit to the number the user is trying to guess
   *
   * @param {array} numberBeingGuessed - Array of digits that the user has typed
   * @param {int} index - index of current input
   * @param {*} value - value entered
   * @return {array} Array of digits the user has typed (updated)
   */
  addDigit(numberBeingGuessed, index, value) {
    numberBeingGuessed[index] = value;

    // doesn't add the digit if it is NaN
    numberBeingGuessed = numberBeingGuessed.filter(digit => !isNaN(digit));

    return numberBeingGuessed;
  }

  /**
   * Check if the user has typed the quantity digits the level requires
   *
   * @param {int} digitsQuantity - quantity of digits the user has to guess
   * @param {array} numberBeingGuessed - array of digits the user has typed
   * @return {boolean} true if user has typed all required digits, false otherwise.
   */
  hasRequiredDigits(digitsQuantity, numberBeingGuessed) {
    if (numberBeingGuessed.length === digitsQuantity) {
      return true;
    }

    return false;
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

  /**
   * Generates the number the user has to guess.
   * the quantity of digits to guess is based on the level chosen.
   *
   * Generates another number if the previous one had duplicate digits
   *
   * @param {int} digitsQuantity - how many digits should be generated
   * @return {int} number which digits the user has to guess
   */
  generateNumberToGuess(digitsQuantity) {
    let rangeMax = ['1'];
    let rangeMin = null;

    for (let i = 0; i < digitsQuantity; i++) {
      rangeMax.push('0');
    }

    rangeMin = parseInt(rangeMax.slice(0, -1).join(''));
    rangeMax = parseInt(rangeMax.join(''));

    const numberToGuess = Math
      .floor(Math.random() * (rangeMax - rangeMin)) + rangeMin;

    if (this.hasDuplicateDigits(numberToGuess)) {
      return this.generateNumberToGuess(digitsQuantity);
    }

    return numberToGuess;
  }

  /**
   * Checks if certain number has duplicate digits
   *
   * @param {int|array} numberArr - number to check
   * @return {boolean} true if the number has duplicate digits, false otherwise.
   */
  hasDuplicateDigits(numberArr) {
    // If argument is int, convert to array
    if (Number.isInteger(numberArr)) {
      numberArr = numberArr.toString().split('');
    }

    const withNoDuplicates = new Set(numberArr);

    if (numberArr.length === withNoDuplicates.size) {
      return false;
    }

    return true;
  }

  /**
   * Gets the quantity of digits the user has to guess
   * based on the level chosen
   * @param {string} levelChosen - level chosen by user
   * @return {int} quantity of digits the user has to guess in order to win
   */
  getDigitsQuantity(levelChosen) {
    let digitsQuantity = null;

    switch (levelChosen) {
      case 'easy':
    digitsQuantity = 4;
        break;
      case 'moderate':
    digitsQuantity = 5;
        break;
      case 'hard':
    digitsQuantity = 6;
        break;
      default:
    digitsQuantity = 5;
    }

    return digitsQuantity;
  }

  /**
   * Translates the levels to spanish
   * @param {string} level - level chosen by player
   * @return {string} level translated to spanish
   */
  levelToSpanish(level) {
    const levelsTranslation = {
      easy: 'Fácil',
      moderate: 'Moderado',
      hard: 'Difícil',
      lottery: 'Lotería',
    }

    return levelsTranslation[level];
  }

  render() {
    return (
      <div className="main-content">
        <div className="game">
          {this.renderChooseLevelBox()}

          <Level level={this.levelToSpanish(this.state.level)}/>

          <InputsContainer
            onInputChange={this.handleInputChange}
            inputsToRender={this.state.digitsQuantity}
            canGuessBeSent={this.state.canGuessBeSent}
          />

          {this.renderErrorMessage(this.state.error)}

          <Status />
        </div>
      </div>
    );
  }
}

export default Game;