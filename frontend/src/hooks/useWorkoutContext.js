import { useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"


function useWorkoutContext() {
  return useContext(WorkoutContext)
}

export default useWorkoutContext