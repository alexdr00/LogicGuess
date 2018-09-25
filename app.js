const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');

// esm to have to have ability of requiring client modules.
require = require("esm")(module);

// Models
require('./models/User');
require('./models/Score');

// Connecting to db
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

// main app
const app = express();

// Requiring passport
require('./services/passport');

// *** General Middleware ***
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// *** Authentication middleware ***
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());

app.use(passport.session());

// *** Routes ***
require('./routes/authRoutes')(app);
require('./routes/scoreRoutes')(app);
require('./routes/userRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running!! (port: ${PORT})`));
