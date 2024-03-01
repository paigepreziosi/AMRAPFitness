const { Schema, Types } = require('mongoose');

const exerciseSchema = new Schema(
  {
    exerciseId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    exerciseName: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      default: 'Unnamed exercise',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = exerciseSchema;
