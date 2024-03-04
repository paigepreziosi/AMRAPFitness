const router = require('express').Router();
const {
  getAthletes,
  getSingleAthlete,
  createAthlete,
  deleteAthlete,
  addWorkout,
  removeWorkout,
} = require('../../controllers/athleteController');

// /api/athletes
router.route('/').get(getAthletes).post(createAthlete);

// /api/athletes/:athleteId
router.route('/:athleteId').get(getSingleAthlete).delete(deleteAthlete);

// /api/athletes/:athleteId/workouts
router.route('/:athleteId/workouts').post(addWorkout);

// /api/athletes/:athleteId/workouts/:workoutId
router.route('/:athleteId/workouts/:workoutId').delete(removeWorkout);

module.exports = router;
