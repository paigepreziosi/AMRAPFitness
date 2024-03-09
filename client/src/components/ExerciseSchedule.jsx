import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import ExerciseForm from './ExerciseForm';
// import Nav from './Nav/index.jsx';
import Exercise from './ExerciseComponent.jsx';

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

  return (<div className="background">
    <h1 className="">Workout Stuff</h1>
    <div className="exercise-box">
      <h2 className="">Exercises:</h2>
      <div className=""></div>
      <a target="_top" className="exercise-btn" href="">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./dist/images/chest.png" alt=""></img>
        </div>
        <p className="">Chest</p>
      </a>

      <a target="_top" className="exercise-btn" href="">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./dist/images/abs.png" alt=""></img>
        </div>
        <p className="">Abs</p>
      </a>

      <a target="_top" className="exercise-btn" href="">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./dist/images/arms.png" alt=""></img>
        </div>
        <p className="">Arms</p>
      </a>

      <a target="_top" className="exercise-btn" href="">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./dist/images/back.png" alt=""></img>
        </div>
        <p className="">Back</p>
      </a>

      <a target="_top" className=" exercise-btn" href="">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./dist/images/legs.png" alt=""></img>
        </div>
        <p className="">Legs</p>
      </a>

      <a target="_top" className="exercise-btn" href="">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./dist/images/sholders.png" alt=""></img>
        </div>
        <p className="">Sholders</p>
      </a>
    </div>

  </div>
  
  )

}

export default ExerciseSchedule;