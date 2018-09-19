module.exports = (req, res, next) => {
  if (req.username) {
    return res.status(401).send({ error: 'Ya tiene un nombre de usuario' });
  }

  next();
};