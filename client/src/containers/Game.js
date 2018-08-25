import React, { Component } from 'react';
import ChooseLevelBox from '../components/ChooseLevel';
import Level from '../components/Level';
import InputsContainer from '../components/InputsContainer';
import Status from '../components/Status';

class Game extends Component {
  constructor(props) {
    super(props);

    this.handleLevelChoose = this.handleLevelChoose.bind(this);

    this.state = {
      attempts: 0,
      level: null,
      digitsGuessed: null,
      placementsGuessed: null,
      numberToGuess: null,
      quantityOfDigits: null,
    }
  }

  /**
   * Sets up the game basic data to start playing based
   * on the level chosen
   * @param {string} level - level chosen by player
   */
  handleLevelChoose(level) {
    const quantityOfDigits = this.getQuantityOfDigits(level);
    const numberToGuess = this.generateNumberToGuess(quantityOfDigits);

    this.setState({
      level,
      numberToGuess,
      quantityOfDigits,
    });
  }

  /**
   * Shows the user the level box where he can choose a level
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
   * @param {int} quantityOfDigits - how many digits should be generated
   * @return {int} number which digits the user has to guess
   */
  generateNumberToGuess(quantityOfDigits) {
    let rangeMax = ['1'];
    let rangeMin = null;

    for (let i = 0; i < quantityOfDigits; i++) {
      rangeMax.push('0');
    }

    rangeMin = parseInt(rangeMax.slice(0, -1).join(''));
    rangeMax = parseInt(rangeMax.join(''));

    const numberToGuess = Math
      .floor(Math.random() * (rangeMax - rangeMin)) + rangeMin;

    if (this.hasDuplicateDigits(numberToGuess)) {
      return this.generateNumberToGuess(quantityOfDigits);
    }

    return numberToGuess;
  }

  /**
   * Checks if the number to guess that was generated has duplicate digits
   *
   * @param {int} generatedNumber - generated number to guess
   * @return {boolean} true if the generated number has duplicate digits, false otherwise.
   */
  hasDuplicateDigits(generatedNumber) {
    const generatedNumberArr = generatedNumber.toString().split('');
    const withNoDuplicates = new Set(generatedNumberArr);

    if (generatedNumberArr.length === withNoDuplicates.size) {
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
  getQuantityOfDigits(levelChosen) {
    let quantityOfDigits = null;

    switch (levelChosen) {
      case 'facil':
        quantityOfDigits = 4;
        break;
      case 'moderado':
        quantityOfDigits = 5;
        break;
      case 'dificil':
        quantityOfDigits = 6;
        break;
      default:
        quantityOfDigits = 5;
    }

    return quantityOfDigits;
  }

  render() {
    return (
      <div className="main-content">
        <div className="game">
          {this.renderChooseLevelBox()}

          <Level level={this.state.level}/>
          {console.log(this.state.numberToGuess)}

          <InputsContainer />

          <Status />
        </div>
      </div>
    );
  }
}
export default Game;