const { Schema, model } = require('mongoose');
const exerciseSchema = require('./Exercise');

// Schema to create Athlete model
const athleteSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    exercises: [exerciseSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Athlete = model('athlete', athleteSchema);

module.exports = Athlete;
