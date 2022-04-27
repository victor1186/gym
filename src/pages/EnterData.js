import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function EnterData({ user, setUser }) {
  const history = useHistory();
  const [workouts, setWorkouts] = useState("1");
  const [trainingYears, setTrainingYears] = useState("0");

  let days_per_week = [...Array(7).keys()];
  // equeal to this ^
  // let days_per_week = [];
  // for(let i = 0; i<7; i++) {
  //   days_per_week.push(i)
  // }

  let years = [...Array(31).keys()];

  const checkBtn = () => {
    setUser({ ...user, workouts: workouts, trainingYears: trainingYears });
    history.push("/ready");
    // console.log({ workouts, trainingYears });
  };
  console.log(user);

  return (
    <div>
      <p>How many workouts a week?</p>
      <br />
      <select
        value={workouts}
        onChange={(event) => setWorkouts(event.target.value)}
      >
        {days_per_week.map((day, key) => (
          <option value={day + 1} key={key}>
            {day + 1}
          </option>
        ))}
      </select>
      <br />
      <p>how many years have you been training?</p>
      <select
        value={trainingYears}
        onChange={(event) => setTrainingYears(event.target.value)}
      >
        {years.map((year, key) => (
          <option value={year} key={key}>
            {year}
          </option>
        ))}
      </select>
      <br />
      <button onClick={() => checkBtn()}>Next</button>
    </div>
  );
}
