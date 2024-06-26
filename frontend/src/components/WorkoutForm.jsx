import React, { useState } from "react";
import useWorkoutContext from "../hooks/useWorkoutContext";
import { CREATE_WORKOUT_API } from "../api/Api";

function WorkoutForm() {
  const [error, setError] = useState(null);
  const {
    workouts,
    setWorkouts,
    load,
    setLoad,
    title,
    setTitle,
    reps,
    setReps,
  } = useWorkoutContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const workout = { title, load, reps };
      const response = await fetch(
        `${CREATE_WORKOUT_API}`,
        {
          method: "POST",
          body: JSON.stringify(workout),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (!response.ok) {
        setError(json.error);
      }
      if (response.ok) {
        setError(null);
        setTitle("");
        setLoad("");
        setReps("");
        console.log("New Workout added", json);
        setWorkouts(json);
      }
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
        <label>Exercise Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Load (in kg):</label>
        <input
          type="number"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
        <label>Reps:</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
}

export default WorkoutForm;
