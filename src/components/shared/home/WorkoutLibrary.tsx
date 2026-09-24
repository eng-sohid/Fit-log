import WorkoutCard from "./WorkoutCrad";
import { Workout } from "../../types/workout";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  return (
    <section id="library" className="mx-auto w-full max-w-7xl px-4 py-16">
      <h2 className="text-3xl font-bold">THE LIBRARY</h2>

      <p className="mt-2 text-gray-500">
        Twelve lifts covering every major muscle group.
      </p>

      <div>
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
