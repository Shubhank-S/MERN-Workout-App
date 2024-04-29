import React, { useState } from "react";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  return (
    <>
      <from className="create">
        <label>Exercise Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Load (in kg):</label>
        <input
          type="text"
          value={load}
          onChange={(e) => setLoad(e.target.value)}
        />
        <label>Reps:</label>
        <input
          type="text"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </from>
    </>
  );
}

export default WorkoutForm;
