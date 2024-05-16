import { createContext, useReducer, useState } from "react";

export const WorkoutContext = createContext();

function WorkoutProvider({ children }) {
  // const name = "Shubhank";
  const [workouts, setWorkouts] = useState([]);
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts, load, setLoad,title,setTitle,reps,setReps }}>
      {children}
    </WorkoutContext.Provider>
  );
}

export default WorkoutProvider;
