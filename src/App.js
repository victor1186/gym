import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import EnterData from "./pages/EnterData";
import Ready from "./pages/Ready";
import Trainer from "./pages/Trainer";
import TrainingPage from "./pages/TrainingPage";

function App() {
  const [user, setUser] = useState(false);
  const [workouts, setWorkouts] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home user={user} setUser={setUser} />}
          />
          <Route
            exact
            path="/EnterData"
            render={() => <EnterData user={user} setUser={setUser} />}
          />
          <Route
            exact
            path="/ready"
            render={() => (
              <Ready setWorkouts={setWorkouts} user={user} setUser={setUser} />
            )}
          />
          <Route
            exact
            path="/trainer"
            render={() => <Trainer workouts={workouts} user={user} />}
          />
          <Route
            exact
            path="/training_page/:id"
            render={({ match }) => (
              <TrainingPage
                workouts={workouts}
                setWorkouts={setWorkouts}
                id={match.params.id}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
