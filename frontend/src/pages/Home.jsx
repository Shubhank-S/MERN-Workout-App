import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";

function Home() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const handleApi = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/workout/get-workouts"
        );
        const json = await response.json();
        if (response.ok) {
          setWorkouts(json.getWorkout);
        }
        console.log(workouts);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };
    handleApi();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
}

export default Home;
