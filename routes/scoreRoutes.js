const mongoose = require('mongoose');
const Score = mongoose.model('scores');
const User = mongoose.model('users');
const requireLogin = require('../middleware/requireLogin');
const requireScore = require('../middleware/requireScore');
const levelToNumber = require('../client/src/lib/levelToNumber').default;
const levelToSpanish = require('../client/src/lib/levelToSpanish').default;
const formatTimeElapsed = require('../client/src/lib/formatTimeElapsed').default;

module.exports = app => {
  app.post('/api/submit-score', requireLogin, requireScore, async (req, res) => {
    const { level, attempts, timeElapsed } = req.body;

    const score = new Score({
      level,
      attempts,
      timeElapsed,
      levelNumber: levelToNumber(level),
      _user: req.user._id,
    });

    await score.save();
    res.send({ message: 'Puntaje Guardado' });
  });

  app.get('/api/get-scores', requireLogin, async (req, res) => {
    const scoresPayload = [];

    const scores = await Score
    .find({})
    .sort({ levelNumber: 'desc', attempts: 'asc', timeElapsed: 'asc' });

    const users = await User.find({});

    let place = 0;

    scores.map((score) => {
      const { attempts, level } = score;
      const timeElapsed = formatTimeElapsed(score.timeElapsed);
      const levelSpanish = levelToSpanish(level);
      let username = null;
      place += 1;

      // Match user and their belonging score.
      users.map(user => {
        if (score['_user'].equals(user._id)) {
          username = user.username;
        }
      });

      scoresPayload.push({
        place,
        username,
        attempts,
        timeElapsed,
        level,
        levelSpanish,
      });
    });

    res.send(scoresPayload);
  });
}