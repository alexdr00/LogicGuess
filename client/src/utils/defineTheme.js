/**
 * Defines a color theme for the game. According to the level chosen
 * @param {string} level - Level chosen
 * @return {string} theme that should be used. These are classes defined in stylesheets/themes folder
 */
const defineTheme = (level) => {
  let theme = null;

  switch (level) {
    case 'easy':
      theme = 'easy-level-theme';
      break;
    case 'moderate':
      theme = 'moderate-level-theme';
      break;
    case 'hard':
      theme = 'hard-level-theme';
      break;
    default:
      theme = 'lottery-level-theme';
  }

  return theme;
}

export default defineTheme;
