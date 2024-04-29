import React from 'react'

function WorkoutDetails({workout}) {
  return (
    <section className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg):</strong>{workout.load}</p>
      <p><strong>Reps:</strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
    </section>
  )
}

export default WorkoutDetails;