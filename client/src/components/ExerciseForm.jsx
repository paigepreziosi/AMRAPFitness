import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import ExerciseComponent from './ExerciseComponent';

function ExerciseForm(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        difficulty: '',
    });
    return (<div className="">
    <h1 className="">As Many Reps As Possible</h1>
    <div className="exercise-box">
      <h2 className="exercise">Exercises:</h2>
      <div className=""></div>
      <a target="_top" className="exercise-btn" href="">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./images/chest.png" alt="Chest"></img>
        </div>
        <p className="">Chest</p>
      </a>

      <a target="_top" className="exercise-btn" href="">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./images/abs.png" alt=""></img>
        </div>
        <p className="">Abs</p>
      </a>

      <a target="_top" className="exercise-btn" href="">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./images/arms.png" alt=""></img>
        </div>
        <p className="">Arms</p>
      </a>

      <a target="_top" className="exercise-btn" href="">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./images/back.png" alt=""></img>
        </div>
        <p className="">Back</p>
      </a>

      <a target="_top" className=" exercise-btn" href="./pages/Chest.jsx">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./images/legs.png" alt="Legs"></img>
        </div>
        <p className="">Legs</p>
      </a>

      <a target="_top" className="exercise-btn" href="./pages/Shoulders">
        <div className="flex items-end">
          <img className="diferent-muscles" src="./images/shoulders.png" alt="Shoulders"></img>
        </div>
        <p className="">Shoulders</p>
      </a>
    </div>

  </div>
  
  )

}



export default ExerciseForm;