const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const checkUsername = require('../middleware/checkUsername');
const User = mongoose.model('users');

module.exports = (app) => {
  app.put('/api/set-username', requireLogin, async (req, res) => {
    const { username } = req.body;

    await User.findByIdAndUpdate(req.user._id, { username });

    res.send({ message: 'Username set successfully' });
  });
}