const connection = require('../config/connection');
const { Athlete, Workout } = require('../models');
const { getRandomName, getRandomExercises } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let workoutCheck = await connection.db.listCollections({ name: 'workouts' }).toArray();
    if (workoutCheck.length) {
      await connection.dropCollection('workouts');
    }

    let athletesCheck = await connection.db.listCollections({ name: 'athletes' }).toArray();
    if (athletesCheck.length) {
      await connection.dropCollection('athletes');
    }


  // Create empty array to hold the athletes
  const athletes = [];

  // Loop 20 times -- add athletes to the athletes array
  for (let i = 0; i < 20; i++) {
    // Get some random exercise objects using a helper function that we imported from ./data
    const exercises = getRandomExercises(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];

    athletes.push({
      first,
      last,
      exercises,
    });
  }

  // Add athletes to the collection and await the results
  await Athlete.collection.insertMany(athletes);

  // Add workouts to the collection and await the results
  await Workout.collection.insertOne({
    workoutName: '',
    inPerson: false,
    athletes: [...athletes],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(athletes);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
