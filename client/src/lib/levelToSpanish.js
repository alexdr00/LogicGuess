/**
 * Translates the levels to spanish
 * @param {string} level - level chosen by player
 * @return {string} level translated to spanish
 */
const levelToSpanish = (level) => {
  const levelsTranslation = {
    easy: 'Fácil',
    moderate: 'Moderado',
    hard: 'Difícil',
    lottery: 'Lotería',
  }

  return levelsTranslation[level];
}

export default levelToSpanish;