import React from "react";
import { useHistory } from "react-router-dom";

export default function Ready({ setUser, user, setWorkouts }) {
  const history = useHistory();

  const btnHandler = (btn) => {
    if (btn) {
      const object = [];

      for (let i = 0; i < user.workouts; i++) {
        let init_km =
          +user.trainingYears !== 0
            ? (user.trainingYears * 5) / user.workouts
            : 2;
        let additional_km = init_km * (0.15 * i);

        object.push({
          id: i + 1,
          km: (init_km + additional_km).toFixed(1),
          success: false,
        });
      }
      setWorkouts(object);

      history.push("/trainer");
    } else {
      setUser(false);
      history.push("/");
    }
  };
  return (
    <div>
      <h1>Ready</h1>
      <button onClick={() => btnHandler(true)}>Yes</button>
      <button onClick={() => btnHandler(false)}>No</button>
    </div>
  );
}
