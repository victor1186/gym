import React from "react";
import { useHistory } from "react-router-dom";

export default function Trainer({ user, workouts }) {
  const history = useHistory();

  if (!user) history.push("/");

  const startBtn = () => {
    const findId = workouts.find((workout) => workout.success === false);
    if (findId) history.push(`/training_page/${findId.id}`);
    else alert("have some rest! :)");
  };

  const buttons = workouts.map((value, key) => {
    return (
      <button
        disabled={value.success}
        key={key}
        onClick={() => history.push(`/training_page/${value.id}`)}
      >
        Workout N.O. {value.id} <br /> {value.km} Km
      </button>
    );
  });

  return (
    <div>
      <h1>Trainer</h1>
      <br />
      <button onClick={() => startBtn()}>Start</button>
      {buttons}
    </div>
  );
}
