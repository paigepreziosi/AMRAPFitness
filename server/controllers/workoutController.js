const { Workout, Athlete } = require('../models');

module.exports = {
  // Get all workouts
  async getWorkouts(req, res) {
    try {
      const workouts = await Workout.find();
      res.json(workouts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a workout
  async getSingleWorkout(req, res) {
    try {
      const workout = await Workout.findOne({ _id: req.params.workoutId })
        .select('-__v');

      if (!workout) {
        return res.status(404).json({ message: 'No workout with that ID' });
      }

      res.json(workout);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a workout
  async createWorkout(req, res) {
    try {
      const workout = await Workout.create(req.body);
      res.json(workout);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a workout
  async deleteWorkout(req, res) {
    try {
      const workout = await Workout.findOneAndDelete({ _id: req.params.workoutId });

      if (!workout) {
        res.status(404).json({ message: 'No workout with that ID' });
      }

      await Athlete.deleteMany({ _id: { $in: workout.athletes } });
      res.json({ message: 'Workouts and Athletes deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a workout
  async updateWorkout(req, res) {
    try {
      const workout = await Workout.findOneAndUpdate(
        { _id: req.params.workoutId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!workout) {
        res.status(404).json({ message: 'No workout with this id!' });
      }

      res.json(workout);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
