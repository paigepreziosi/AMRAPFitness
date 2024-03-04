const { Schema, model } = require('mongoose');

// Schema to create a workout model
const workoutSchema = new Schema(
  {
    workoutName: {
      type: String,
      required: true,
    },
    inPerson: {
      type: Boolean,
      default: true,
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    endDate: {
      type: Date,
      // Sets a default value of 12 weeks from now
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
    athletes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Athlete',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Workout = model('workout', workoutSchema);

module.exports = Workout;
