const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');
const athleteRoutes = require('./athleteRoutes');

router.use('/workouts', workoutRoutes);
router.use('/athletes', athleteRoutes);

module.exports = router;
