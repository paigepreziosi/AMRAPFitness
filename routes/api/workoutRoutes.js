const router = require('express').Router();
const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
} = require('../../controllers/workoutController.js');

// /api/Workouts
router.route('/').get(getWorkouts).post(createWorkout);

// /api/Workouts/:WorkoutId
router
  .route('/:workoutId')
  .get(getSingleWorkout)
  .put(updateWorkout)
  .delete(deleteWorkout);

module.exports = router;
