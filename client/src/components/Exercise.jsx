import { useState } from 'react';
import ExerciseSchedule from './ExerciseSchedule';

function Exercise(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        difficulty: '',
    });

    console.log(props.Exercise);
 return <div></div>
}

export default Exercise;