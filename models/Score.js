const mongoose = require('mongoose');
const { Schema } = mongoose;

const scoreSchema = new Schema({
  level: String,
  attempts: Number,
  timeElapsed: Number,
  levelNumber: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('scores', scoreSchema);