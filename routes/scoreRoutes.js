const mongoose = require('mongoose');
const Score = mongoose.model('scores');
const requireLogin = require('../middleware/requireLogin');
const requireScore = require('../middleware/requireScore');

module.exports = app => {
  app.post('/api/submit-score', requireLogin, requireScore, async (req, res) => {
    const { level, attempts, timeElapsed } = req.body;

    const score = new Score({
      level,
      attempts,
      timeElapsed,
      _user: req.user._id,
    });

    await score.save();
    res.send({ message: 'Puntaje Guardado' });
  });

  app.get('/api/get-scores', requireLogin, async (req, res) => {
    const allScores = await Score.find({});

    res.send({ allScores })

  });

}