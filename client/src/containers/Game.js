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
      digitsGuessed: null,
      placementsGuessed: null,
      level: null,
      numberToGuess: null,
      quantityOfDigits: null,
      isLotteryLevel: null
    }
  }

  /**
   * Sets up the game basic data to start playing.
   * based on the level chosen
   * @param {string} level - level chosen by player
   */
  handleLevelChoose(level) {
    const quantityOfDigits = this.getQuantityOfDigits(level);
    const numberToGuess = this.generateNumberToGuess(quantityOfDigits);

    this.setState({
      level,
      numberToGuess,
      quantityOfDigits,
      isLotteryLevel: level === 'lottery' ? true : false,
    });
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
      case 'easy':
        quantityOfDigits = 4;
        break;
      case 'moderate':
        quantityOfDigits = 5;
        break;
      case 'hard':
        quantityOfDigits = 6;
        break;
      default:
        quantityOfDigits = 5;
    }

    return quantityOfDigits;
  }

  /**
   * Translate the levels to spanish
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

          <InputsContainer inputsToRender={this.state.quantityOfDigits} />

          <Status />
        </div>
      </div>
    );
  }
}
export default Game;