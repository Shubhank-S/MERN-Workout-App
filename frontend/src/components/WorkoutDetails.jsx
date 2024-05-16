import React, { useState } from "react";
import useWorkoutContext from "../hooks/useWorkoutContext";
import { DELETE_WORKOUT_API, UPDATE_WORKOUT_API } from "../api/Api";

function WorkoutDetails({ workout }) {
 
  const { load, title, reps } = useWorkoutContext();
  const handleUpdateWorkout = async () => {
    try {
      const newTitle = prompt("Enter New Exercise");
      const newLoads = prompt("Enter New Loads");
      const newReps = prompt("Enter New Reps");
      const response = await fetch(
        `${UPDATE_WORKOUT_API}/${workout._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: newTitle,
            load: newLoads,
            reps: newReps,
          }),
        }
      );
      const json = await response.json();
      if (response.ok) {
        console.log(" Workout Updated", json);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteWorkout = async () => {
    try {
      const response = await fetch(`${DELETE_WORKOUT_API}/${workout._id}`, {
        method: "DELETE",
      });
      const json = await response.json();
      if (response.ok) {
        console.log(" Workout Deleted", json);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps:</strong>
        {workout.reps}
      </p>
      <p>{workout.createdAt}</p>
      <button onClick={handleUpdateWorkout} className="update_button">
        Update
      </button>
      <button onClick={handleDeleteWorkout} className="delete_button">
        Delete
      </button>
    </section>
  );
}

export default WorkoutDetails;
