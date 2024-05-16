import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import useWorkoutContext from "../hooks/useWorkoutContext";

function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);
  // const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const handleApi = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/workout/get-workouts"
        );
        const json = await response.json();
        if (response.ok) {
          //  dispatch({ type: "SET_WORKOUTS", payload:json });
          setWorkouts(json.getWorkout);
          console.log(workouts);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    handleApi();
  }, []);

  console.log(workouts);
  return (
    <div className="home">
      <div className="workouts">
        {workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
}

export default Home;
