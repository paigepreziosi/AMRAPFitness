const router = require('express').Router();
const {
  getWorkouts,
  getSingleWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  addExercise,
  removeExercise,
} = require('../../controllers/workoutController.js');

// /api/Workouts
router.route('/').get(getWorkouts).post(createWorkout);

// /api/Workouts/:WorkoutId
router
  .route('/:workoutId')
  .get(getSingleWorkout)
  .put(updateWorkout)
  .delete(deleteWorkout);

// /api/workouts/:workoutId/exercises
router.route('/:workoutId/exercises').post(addExercise);

// /api/workouts/:workoutId/exercises/:exerciseId
router.route('/:workoutId/exercises/:exerciseId').delete(removeExercise);

module.exports = router;
