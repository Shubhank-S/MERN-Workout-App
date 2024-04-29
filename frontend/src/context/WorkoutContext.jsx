import { createContext } from "react";

export const WorkoutContext = createContext();

function WorkoutProvider({ children }) {
  const name = "Shubhank";
  return (
    <WorkoutContext.Provider value={name}>{children}</WorkoutContext.Provider>
  );
}

export default WorkoutProvider;
