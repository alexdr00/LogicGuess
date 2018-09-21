const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const keys = require('./config/dev');

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

app.listen(5000, () => console.log(`Server Running!! (port: ${5000})`));
