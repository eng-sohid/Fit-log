import WorkoutCard from "./WorkoutCrad";
import { Workout } from "../../types/workout";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

const WorkoutLibrary = ({ workouts }: WorkoutLibraryProps) => {
  return (
    <section
      id="library"
      className="mx-auto w-full max-w-7xl px-4 py-16 sm:py-20"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-gray-400">
            TRAIN SMART
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 max-w-xl text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <p className="text-sm font-semibold text-gray-400">
          {workouts.length} WORKOUTS
        </p>
      </div>

      {/* Workout Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
