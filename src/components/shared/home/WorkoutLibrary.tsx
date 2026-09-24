import WorkoutCard from "./WorkoutCrad";
import { Workout } from "../../types/workout";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  return (
    <section id="library">
      <h2>THE LIBRARY</h2>
      <p>Twelve lifts covering every major muscle group.</p>

      <div>
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
