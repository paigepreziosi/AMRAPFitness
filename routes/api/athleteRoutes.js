const router = require('express').Router();
const {
  getAthletes,
  getSingleAthlete,
  createAthlete,
  deleteAthlete,
  addExercise,
  removeExercise,
} = require('../../controllers/athleteController');

// /api/athletes
router.route('/').get(getAthletes).post(createAthlete);

// /api/athletes/:athleteId
router.route('/:athleteId').get(getSingleAthlete).delete(deleteAthlete);

// /api/athletes/:athleteId/exercises
router.route('/:athleteId/exercises').post(addExercise);

// /api/athletes/:athleteId/exercises/:exerciseId
router.route('/:athleteId/exercises/:exerciseId').delete(removeExercise);

module.exports = router;
