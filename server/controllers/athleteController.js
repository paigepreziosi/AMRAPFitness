const { ObjectId } = require('mongoose').Types;
const { Athlete, Workout } = require('../models');

// Aggregate function to get the number of athletes overall
const headCount = async () => {
  const numberOfAthletess = await Athlete.aggregate()
    .count('athleteCount');
  return numberOfAthletes;
}

module.exports = {
  // Get all athletes
  async getAthletes(req, res) {
    try {
      const athletes = await Athlete.find();

      const athleteObj = {
        athletes,
        headCount: await headCount(),
      };

      res.json(athleteObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single athlete
  async getSingleAthlete(req, res) {
    try {
      const athlete = await Athlete.findOne({ _id: req.params.athleteId })
        .select('-__v');

      if (!athlete) {
        return res.status(404).json({ message: 'No athlete with that ID' })
      }

      res.json({ athlete });
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new athlete
  async createAthlete(req, res) {
    try {
      const athlete = await Athlete.create(req.body);
      res.json(athlete);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Delete an athlete 
  async deleteAthlete(req, res) {
    try {
      const athlete = await Athlete.findOneAndRemove({ _id: req.params.athleteId });

      if (!athlete) {
        return res.status(404).json({ message: 'No such athlete exists' });
      }

      res.json({ message: 'Athlete successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add a workout to an athlete
  async addWorkout(req, res) {
    console.log('You are adding a workout');
    console.log(req.body);

    try {
      const athlete = await Athlete.findOneAndUpdate(
        { _id: req.params.athleteId },
        { $addToSet: { workouts: req.body } },
        { runValidators: true, new: true }
      );

      if (!athlete) {
        return res
          .status(404)
          .json({ message: 'No athlete found with that ID :(' });
      }

      res.json(athlete);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove a workout from an athlete
  async removeWorkout(req, res) {
    try {
      const athlete = await Athlete.findOneAndUpdate(
        { _id: req.params.athleteId },
        { $pull: { workout: { workoutId: req.params.workoutId } } },
        { runValidators: true, new: true }
      );

      if (!athlete) {
        return res
          .status(404)
          .json({ message: 'No athlete found with that ID :(' });
      }

      res.json(athlete);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
