module.exports = (req, res, next) => {
  if (!req.body.attempts) {
    return res.status(400).send({ error: 'Debes haber jugado' });
  }

  next();
};