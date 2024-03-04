import { useState } from 'react';
import ExerciseForm from './ExerciseForm';
import Exercise from './Exercise';

function ExerciseSchedule() {
    const [Exercise, setExercise] = useState([]);

    const addExcercise = (item) => {
        
      };

      const completeExercisetItem = (id) => {
        // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
        let updated = Exercise.map((item) => {
    
        });
    
        setExercise(updatedExercise);
      };

      return 

}

export default ExerciseSchedule;