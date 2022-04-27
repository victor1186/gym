import React from "react";
import { useHistory } from "react-router-dom";

export default function TrainingPage(props) {
  const { workouts, setWorkouts, id } = props;

  const history = useHistory();

  if (workouts === false) history.push("/");

  const BtnHandler = (success) => {
    if (success) {
      const workoutCopy = [...workouts];
      const index = workoutCopy.findIndex((workout) => workout.id === +id);
      workoutCopy[index].success = true;
      setWorkouts(workoutCopy);
    }
    history.push("/trainer");
  };
  const currentWorkout = workouts.find((workout) => workout.id === +id);

  return (
    <div>
      <h1>Workout N.O {currentWorkout.id} </h1>
      <h2> KM {currentWorkout.km} </h2>
      <button onClick={() => BtnHandler(true)}>Success</button>
      <button onClick={() => BtnHandler(false)}>Failure</button>
    </div>
  );
}
