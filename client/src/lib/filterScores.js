const filterScores = (filter, scores, username) => {
  let scoresToShow = null;

  switch (filter) {
    case 'all':
      scoresToShow = scores;
      break;
    case 'userScores':
      scoresToShow = scores.filter(score =>
        score.username === username);
      break;
    default:
      scoresToShow = scores.filter(score =>
        score.level === filter);
  }

  return scoresToShow;
}

export default filterScores;